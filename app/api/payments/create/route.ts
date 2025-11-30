import { prisma } from "@/lib/prisma/client";
import { paymentSchema } from "@/lib/validations/payment";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import {
  successResponse,
  validationErrorResponse,
  notFoundResponse,
  forbiddenResponse,
  errorResponse,
} from "@/lib/api/response";
import { generatePaymentWidget } from "@/lib/payments/cloudpayments";

export async function POST(request: Request) {
  try {
    const userId = await getUserId();
    const body = await request.json();
    const parsed = paymentSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { orderId } = parsed.data;

    // Проверяем заказ
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { user: true, payment: true },
    });

    if (!order) {
      return notFoundResponse("Заказ не найден");
    }

    if (order.userId !== userId) {
      return forbiddenResponse();
    }

    if (order.payment?.status === "COMPLETED") {
      return errorResponse("Заказ уже оплачен", 400);
    }

    // Создаём или обновляем запись платежа
    const payment = await prisma.payment.upsert({
      where: { orderId },
      update: {
        amount: order.total,
        status: "PENDING",
      },
      create: {
        orderId,
        amount: order.total,
        status: "PENDING",
      },
    });

    // Генерируем данные для виджета CloudPayments
    const widgetData = generatePaymentWidget({
      orderId: order.id,
      amount: Number(order.total),
      description: `Оплата заказа #${order.id}`,
      email: order.user.email,
      accountId: userId,
    });

    return successResponse({
      paymentId: payment.id,
      widget: widgetData,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

