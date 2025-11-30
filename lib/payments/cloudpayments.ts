import crypto from "crypto";

const CLOUDPAYMENTS_PUBLIC_ID = process.env.CLOUDPAYMENTS_PUBLIC_ID!;
const CLOUDPAYMENTS_SECRET_KEY = process.env.CLOUDPAYMENTS_SECRET_KEY!;
const CLOUDPAYMENTS_API_URL = "https://api.cloudpayments.ru";

interface ChargeRequest {
  Amount: number;
  Currency: string;
  InvoiceId: string;
  Description: string;
  AccountId: string;
  Email?: string;
  CardCryptogramPacket?: string;
  Token?: string;
}

interface CloudPaymentsResponse {
  Success: boolean;
  Message?: string;
  Model?: {
    TransactionId: number;
    Amount: number;
    Currency: string;
    InvoiceId: string;
    AccountId: string;
    Email?: string;
    Description: string;
    Status: string;
    StatusCode: number;
  };
}

function getAuthHeader(): string {
  const credentials = `${CLOUDPAYMENTS_PUBLIC_ID}:${CLOUDPAYMENTS_SECRET_KEY}`;
  return `Basic ${Buffer.from(credentials).toString("base64")}`;
}

export async function createCharge(
  data: ChargeRequest
): Promise<CloudPaymentsResponse> {
  const response = await fetch(`${CLOUDPAYMENTS_API_URL}/payments/charge`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getPaymentStatus(
  transactionId: string
): Promise<CloudPaymentsResponse> {
  const response = await fetch(`${CLOUDPAYMENTS_API_URL}/payments/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({ TransactionId: parseInt(transactionId) }),
  });

  return response.json();
}

export async function refundPayment(
  transactionId: string,
  amount: number
): Promise<CloudPaymentsResponse> {
  const response = await fetch(`${CLOUDPAYMENTS_API_URL}/payments/refund`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({
      TransactionId: parseInt(transactionId),
      Amount: amount,
    }),
  });

  return response.json();
}

export function verifyWebhookSignature(
  body: string,
  signature: string
): boolean {
  const hmac = crypto.createHmac("sha256", CLOUDPAYMENTS_SECRET_KEY);
  hmac.update(body);
  const expectedSignature = hmac.digest("base64");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export function generatePaymentWidget(data: {
  orderId: string;
  amount: number;
  currency?: string;
  description: string;
  email?: string;
  accountId: string;
}) {
  return {
    publicId: CLOUDPAYMENTS_PUBLIC_ID,
    description: data.description,
    amount: data.amount,
    currency: data.currency || "RUB",
    invoiceId: data.orderId,
    accountId: data.accountId,
    email: data.email,
    skin: "modern",
  };
}

