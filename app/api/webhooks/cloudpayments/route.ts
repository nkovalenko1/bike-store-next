import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/client";
import { webhookSchema } from "@/lib/validations/payment";
import { verifyWebhookSignature } from "@/lib/payments/cloudpayments";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("Content-HMAC") || "";

    // Проверяем подпись webhook
    if (!verifyWebhookSignature(body, signature)) {
      console.error("CloudPayments webhook: Invalid signature");
      return NextResponse.json({ code: 13 }, { status: 400 });
    }

    const data = JSON.parse(body);
    const parsed = webhookSchema.safeParse(data);

    if (!parsed.success) {
      console.error("CloudPayments webhook: Validation error", parsed.error);
      return NextResponse.json({ code: 10 }, { status: 400 });
    }

    const { TransactionId, Amount, Status, InvoiceId } = parsed.data;

    console.log(`CloudPayments webhook: Transaction ${TransactionId}, Status: ${Status}`);

    // Находим платёж по InvoiceId (orderId)
    const payment = await prisma.payment.findFirst({
      where: { orderId: InvoiceId },
    });

    if (!payment) {
      console.error(`CloudPayments webhook: Payment not found for order ${InvoiceId}`);
      // Возвращаем успех, чтобы CloudPayments не повторял запрос
      return NextResponse.json({ code: 0 });
    }

    // Маппинг статусов
    const statusMap: Record<string, "COMPLETED" | "FAILED" | "PROCESSING" | "REFUNDED"> = {
      Completed: "COMPLETED",
      Authorized: "PROCESSING",
      Declined: "FAILED",
      Refunded: "REFUNDED",
    };

    const newPaymentStatus = statusMap[Status];

    if (!newPaymentStatus) {
      console.warn(`CloudPayments webhook: Unknown status ${Status}`);
      return NextResponse.json({ code: 0 });
    }

    // Обновляем платёж в транзакции
    await prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: newPaymentStatus,
          transactionId: String(TransactionId),
          amount: Amount,
        },
      });

      // Обновляем статус заказа в зависимости от статуса платежа
      if (newPaymentStatus === "COMPLETED") {
        await tx.order.update({
          where: { id: payment.orderId },
          data: { status: "CONFIRMED" },
        });
      } else if (newPaymentStatus === "FAILED") {
        await tx.order.update({
          where: { id: payment.orderId },
          data: { status: "CANCELLED" },
        });
      } else if (newPaymentStatus === "REFUNDED") {
        await tx.order.update({
          where: { id: payment.orderId },
          data: { status: "CANCELLED" },
        });
      }
    });

    console.log(`CloudPayments webhook: Payment ${payment.id} updated to ${newPaymentStatus}`);

    // Возвращаем код 0 для подтверждения получения
    return NextResponse.json({ code: 0 });
  } catch (error) {
    console.error("CloudPayments webhook error:", error);
    return NextResponse.json({ code: 13 }, { status: 500 });
  }
}

