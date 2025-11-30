import { prisma } from "@/lib/prisma/client";
import { addToCartSchema } from "@/lib/validations/cart";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import { successResponse, validationErrorResponse } from "@/lib/api/response";

export async function GET() {
  try {
    const userId = await getUserId();

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true,
        variant: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return successResponse(cartItems);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getUserId();
    const body = await request.json();
    const parsed = addToCartSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { productId, variantId, quantity } = parsed.data;

    const cartItem = await prisma.cartItem.upsert({
      where: {
        userId_productId_variantId: {
          userId,
          productId,
          variantId: variantId ?? null,
        },
      },
      update: {
        quantity: { increment: quantity },
      },
      create: {
        userId,
        productId,
        variantId: variantId ?? null,
        quantity,
      },
      include: {
        product: true,
        variant: true,
      },
    });

    return successResponse(cartItem, undefined, 201);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE() {
  try {
    const userId = await getUserId();

    await prisma.cartItem.deleteMany({ where: { userId } });

    return successResponse({ cleared: true });
  } catch (error) {
    return handleApiError(error);
  }
}

