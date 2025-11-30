import { z } from "zod";

export const variantSchema = z.object({
  name: z.string().min(1, "Название варианта обязательно"),
  color: z.string().optional(),
  image: z.string().url("Некорректный URL изображения").optional().or(z.literal("")),
  price: z
    .number()
    .positive("Цена должна быть положительным числом")
    .optional(),
  stock: z.number().int().min(0, "Количество не может быть отрицательным").default(0),
});

export const productSchema = z.object({
  name: z.string().min(1, "Название товара обязательно"),
  description: z.string().optional(),
  price: z
    .number()
    .positive("Цена должна быть положительным числом")
    .or(z.string().regex(/^\d+(\.\d{1,2})?$/, "Некорректный формат цены")),
  images: z
    .array(z.string().url("Некорректный URL изображения"))
    .min(1, "Добавьте хотя бы одно изображение"),
  category: z.string().min(1, "Категория обязательна"),
  stock: z.number().int().min(0, "Количество не может быть отрицательным").default(0),
  variants: z.array(variantSchema).optional(),
});

export const productQuerySchema = z.object({
  page: z
    .string()
    .regex(/^\d+$/, "Страница должна быть числом")
    .transform(Number)
    .pipe(z.number().int().positive())
    .default("1"),
  limit: z
    .string()
    .regex(/^\d+$/, "Лимит должен быть числом")
    .transform(Number)
    .pipe(z.number().int().positive().max(100))
    .default("10"),
  category: z.string().optional(),
  search: z.string().optional(),
  sortBy: z.enum(["name", "price", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  minPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Некорректный формат минимальной цены")
    .transform(Number)
    .optional(),
  maxPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Некорректный формат максимальной цены")
    .transform(Number)
    .optional(),
});

export const productIdSchema = z.object({
  id: z.string().min(1, "ID товара обязателен"),
});

export type ProductInput = z.infer<typeof productSchema>;
export type VariantInput = z.infer<typeof variantSchema>;
export type ProductQueryInput = z.infer<typeof productQuerySchema>;
export type ProductIdInput = z.infer<typeof productIdSchema>;

