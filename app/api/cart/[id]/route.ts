import { prisma } from "@/lib/prisma/client";
import { updateCartSchema } from "@/lib/validations/cart";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import {
  successResponse,
  notFoundResponse,
  validationErrorResponse,
  forbiddenResponse,
} from "@/lib/api/response";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const userId = await getUserId();
    const { id } = await params;
    const body = await request.json();
    const parsed = updateCartSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { quantity } = parsed.data;

    const existingItem = await prisma.cartItem.findUnique({
      where: { id },
    });

    if (!existingItem) {
      return notFoundResponse("Элемент корзины не найден");
    }

    if (existingItem.userId !== userId) {
      return forbiddenResponse();
    }

    const cartItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity },
      include: {
        product: true,
        variant: true,
      },
    });

    return successResponse(cartItem);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const userId = await getUserId();
    const { id } = await params;

    const existingItem = await prisma.cartItem.findUnique({
      where: { id },
    });

    if (!existingItem) {
      return notFoundResponse("Элемент корзины не найден");
    }

    if (existingItem.userId !== userId) {
      return forbiddenResponse();
    }

    await prisma.cartItem.delete({ where: { id } });

    return successResponse({ deleted: true });
  } catch (error) {
    return handleApiError(error);
  }
}

