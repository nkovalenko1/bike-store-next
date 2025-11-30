import { prisma } from "@/lib/prisma/client";
import { handleApiError } from "@/lib/api/error-handler";
import { getUserId } from "@/lib/api/middleware";
import {
  successResponse,
  notFoundResponse,
  forbiddenResponse,
} from "@/lib/api/response";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Params) {
  try {
    const userId = await getUserId();
    const { id } = await params;

    const payment = await prisma.payment.findUnique({
      where: { id },
      include: {
        order: {
          include: {
            items: {
              include: {
                product: true,
                variant: true,
              },
            },
          },
        },
      },
    });

    if (!payment) {
      return notFoundResponse("Платёж не найден");
    }

    if (payment.order.userId !== userId) {
      return forbiddenResponse();
    }

    return successResponse(payment);
  } catch (error) {
    return handleApiError(error);
  }
}

