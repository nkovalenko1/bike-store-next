import { prisma } from "@/lib/prisma/client";
import { productSchema } from "@/lib/validations/product";
import { handleApiError } from "@/lib/api/error-handler";
import {
  successResponse,
  notFoundResponse,
  validationErrorResponse,
} from "@/lib/api/response";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const product = await prisma.product.findUnique({
      where: { id },
      include: { variants: true },
    });

    if (!product) {
      return notFoundResponse("Товар не найден");
    }

    return successResponse(product);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = productSchema.partial().safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { variants, price, ...data } = parsed.data;

    const product = await prisma.product.update({
      where: { id },
      data: {
        ...data,
        price: price
          ? typeof price === "string"
            ? parseFloat(price)
            : price
          : undefined,
      },
      include: { variants: true },
    });

    return successResponse(product);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    await prisma.product.delete({ where: { id } });

    return successResponse({ deleted: true });
  } catch (error) {
    return handleApiError(error);
  }
}

