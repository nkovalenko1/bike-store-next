import { prisma } from "@/lib/prisma/client";
import { createOrderSchema } from "@/lib/validations/order";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import {
  successResponse,
  validationErrorResponse,
  errorResponse,
} from "@/lib/api/response";
import { Decimal } from "@prisma/client/runtime/library";

export async function GET() {
  try {
    const userId = await getUserId();

    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
        payment: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return successResponse(orders);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getUserId();
    const body = await request.json();
    const parsed = createOrderSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { shippingAddress } = parsed.data;

    // Получаем корзину пользователя
    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true,
        variant: true,
      },
    });

    if (cartItems.length === 0) {
      return errorResponse("Корзина пуста", 400);
    }

    // Рассчитываем общую сумму
    const total = cartItems.reduce((sum, item) => {
      const price = item.variant?.price ?? item.product.price;
      return sum.add(new Decimal(price).mul(item.quantity));
    }, new Decimal(0));

    // Создаём заказ в транзакции
    const order = await prisma.$transaction(async (tx) => {
      // Создаём заказ
      const newOrder = await tx.order.create({
        data: {
          userId,
          total,
          shippingAddress,
          items: {
            create: cartItems.map((item) => ({
              productId: item.productId,
              variantId: item.variantId,
              quantity: item.quantity,
              price: item.variant?.price ?? item.product.price,
            })),
          },
        },
        include: {
          items: {
            include: {
              product: true,
              variant: true,
            },
          },
        },
      });

      // Очищаем корзину
      await tx.cartItem.deleteMany({ where: { userId } });

      return newOrder;
    });

    return successResponse(order, undefined, 201);
  } catch (error) {
    return handleApiError(error);
  }
}

