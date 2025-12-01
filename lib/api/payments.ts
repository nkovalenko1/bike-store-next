import { apiPost, apiGet } from "./client";
import type { PaymentInput, VerifyPaymentInput } from "@/lib/validations/payment";

export interface PaymentWidgetData {
  paymentId: string;
  widget: {
    publicId: string;
    amount: number;
    currency: string;
    description: string;
    accountId: string;
    email: string;
    invoiceId: string;
  };
}

export async function createPayment(data: PaymentInput): Promise<PaymentWidgetData> {
  const response = await apiPost<PaymentWidgetData>("payments/create", data);
  return response.data;
}

export async function verifyPayment(
  data: VerifyPaymentInput
): Promise<{ verified: boolean }> {
  const response = await apiPost<{ verified: boolean }>("payments/verify", data);
  return response.data;
}

export async function getPayment(id: string) {
  const response = await apiGet(`payments/${id}`);
  return response.data;
}

