import { z } from "zod";

export const paymentSchema = z.object({
  orderId: z.string().min(1, "ID заказа обязателен"),
  amount: z
    .number()
    .positive("Сумма должна быть положительным числом")
    .or(
      z
        .string()
        .regex(/^\d+(\.\d{1,2})?$/, "Некорректный формат суммы")
        .transform(Number)
    ),
  cardToken: z.string().min(1, "Токен карты обязателен").optional(),
});

export const webhookSchema = z.object({
  TransactionId: z.number().int().positive(),
  Amount: z.number().positive(),
  Currency: z.string().length(3, "Код валюты должен состоять из 3 символов"),
  DateTime: z.string(),
  CardFirstSix: z.string().optional(),
  CardLastFour: z.string().optional(),
  CardType: z.string().optional(),
  Status: z.enum(["Completed", "Declined", "Authorized", "Refunded"]),
  InvoiceId: z.string().optional(),
  AccountId: z.string().optional(),
  Email: z.string().email().optional(),
  Description: z.string().optional(),
  Data: z.record(z.unknown()).optional(),
});

export const paymentIdSchema = z.object({
  id: z.string().min(1, "ID платежа обязателен"),
});

export const verifyPaymentSchema = z.object({
  transactionId: z.string().min(1, "ID транзакции обязателен"),
});

export type PaymentInput = z.infer<typeof paymentSchema>;
export type WebhookInput = z.infer<typeof webhookSchema>;
export type PaymentIdInput = z.infer<typeof paymentIdSchema>;
export type VerifyPaymentInput = z.infer<typeof verifyPaymentSchema>;

