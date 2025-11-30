import { prisma } from "@/lib/prisma/client";
import { updateOrderStatusSchema } from "@/lib/validations/order";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId, requireAdminSession } from "@/lib/api/middleware";
import {
  successResponse,
  notFoundResponse,
  validationErrorResponse,
  forbiddenResponse,
} from "@/lib/api/response";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Params) {
  try {
    const userId = await getUserId();
    const { id } = await params;

    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
        payment: true,
      },
    });

    if (!order) {
      return notFoundResponse("Заказ не найден");
    }

    if (order.userId !== userId) {
      return forbiddenResponse();
    }

    return successResponse(order);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await requireAdminSession();
    const { id } = await params;
    const body = await request.json();
    const parsed = updateOrderStatusSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { status } = parsed.data;

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
        payment: true,
      },
    });

    return successResponse(order);
  } catch (error) {
    return handleApiError(error);
  }
}

