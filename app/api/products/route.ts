import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma/client";
import { productQuerySchema, productSchema } from "@/lib/validations/product";
import { handleApiError } from "@/lib/api/error-handler";
import { successResponse, validationErrorResponse } from "@/lib/api/response";
import { requireAdminSession } from "@/lib/api/middleware";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const parsed = productQuerySchema.safeParse(searchParams);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { page, limit, category, search, sortBy, sortOrder, minPrice, maxPrice } =
      parsed.data;

    const where: Prisma.ProductWhereInput = {};

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: { variants: true },
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    return successResponse(products, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    await requireAdminSession();
    const body = await request.json();
    const parsed = productSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error.flatten());
    }

    const { variants, price, ...data } = parsed.data;

    const product = await prisma.product.create({
      data: {
        ...data,
        price: typeof price === "string" ? parseFloat(price) : price,
        variants: variants
          ? {
              create: variants.map((v) => ({
                name: v.name,
                color: v.color,
                image: v.image || null,
                price: v.price,
                stock: v.stock,
              })),
            }
          : undefined,
      },
      include: { variants: true },
    });

    return successResponse(product, undefined, 201);
  } catch (error) {
    return handleApiError(error);
  }
}

