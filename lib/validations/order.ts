import { z } from "zod";

export const shippingAddressSchema = z.object({
  firstName: z.string().min(1, "Имя обязательно"),
  lastName: z.string().min(1, "Фамилия обязательна"),
  email: z.string().email("Некорректный email адрес"),
  phone: z.string().min(1, "Телефон обязателен"),
  address: z.string().min(1, "Адрес обязателен"),
  city: z.string().min(1, "Город обязателен"),
  postalCode: z.string().min(1, "Почтовый индекс обязателен"),
  country: z.string().min(1, "Страна обязательна"),
});

export const createOrderSchema = z.object({
  shippingAddress: shippingAddressSchema,
});

export const orderIdSchema = z.object({
  id: z.string().min(1, "ID заказа обязателен"),
});

export const updateOrderStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "CONFIRMED",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED",
  ]),
});

export type ShippingAddressInput = z.infer<typeof shippingAddressSchema>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type OrderIdInput = z.infer<typeof orderIdSchema>;
export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>;

