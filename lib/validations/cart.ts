import { z } from "zod";

export const addToCartSchema = z.object({
  productId: z.string().min(1, "ID товара обязателен"),
  variantId: z.string().optional(),
  quantity: z
    .number()
    .int()
    .positive("Количество должно быть положительным числом")
    .default(1),
});

export const updateCartSchema = z.object({
  quantity: z
    .number()
    .int()
    .positive("Количество должно быть положительным числом")
    .min(1, "Количество должно быть минимум 1"),
});

export const cartItemIdSchema = z.object({
  id: z.string().min(1, "ID элемента корзины обязателен"),
});

export type AddToCartInput = z.infer<typeof addToCartSchema>;
export type UpdateCartInput = z.infer<typeof updateCartSchema>;
export type CartItemIdInput = z.infer<typeof cartItemIdSchema>;

