import { prisma } from "@/lib/prisma/client";
import { verifyPaymentSchema } from "@/lib/validations/payment";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import {
  successResponse,
  validationErrorResponse,
  notFoundResponse,
  forbiddenResponse,
} from "@/lib/api/response";
import { getPaymentStatus } from "@/lib/payments/cloudpayments";

export async function POST(request: Request) {
  try {
    const userId = await getUserId();
    const body = await request.json();
    const parsed = verifyPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { transactionId } = parsed.data;

    // Получаем статус от CloudPayments
    const cpResponse = await getPaymentStatus(transactionId);

    if (!cpResponse.Success || !cpResponse.Model) {
      return notFoundResponse("Транзакция не найдена");
    }

    const { InvoiceId, Status } = cpResponse.Model;

    // Находим платёж по orderId (InvoiceId)
    const payment = await prisma.payment.findFirst({
      where: { order: { id: InvoiceId } },
      include: { order: true },
    });

    if (!payment) {
      return notFoundResponse("Платёж не найден");
    }

    if (payment.order.userId !== userId) {
      return forbiddenResponse();
    }

    // Маппинг статусов CloudPayments
    const statusMap: Record<string, "COMPLETED" | "FAILED" | "PROCESSING"> = {
      Completed: "COMPLETED",
      Authorized: "PROCESSING",
      Declined: "FAILED",
    };

    const newStatus = statusMap[Status] || "PROCESSING";

    // Обновляем статус платежа
    const updatedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: newStatus,
        transactionId,
      },
    });

    // Если платёж успешен, обновляем статус заказа
    if (newStatus === "COMPLETED") {
      await prisma.order.update({
        where: { id: payment.orderId },
        data: { status: "CONFIRMED" },
      });
    }

    return successResponse({
      payment: updatedPayment,
      cloudpayments: cpResponse.Model,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

