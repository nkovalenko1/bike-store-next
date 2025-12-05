import { apiGet, apiPost } from "./client";
import type { OrderWithDetails } from "@/types/order";
import type { CreateOrderInput } from "@/lib/validations/order";

function normalizeOrder(order: OrderWithDetails): OrderWithDetails {
  const normalizedItems =
    order.items?.map((item) => ({
      ...item,
      price: typeof item.price === "string" ? parseFloat(item.price) : item.price,
    })) ?? [];

  const normalizedPayment = order.payment
    ? {
        ...order.payment,
        amount:
          typeof order.payment.amount === "string"
            ? parseFloat(order.payment.amount)
            : order.payment.amount,
      }
    : null;

  return {
    ...order,
    total: typeof order.total === "string" ? parseFloat(order.total) : order.total,
    items: normalizedItems,
    payment: normalizedPayment,
  };
}

export async function getOrders(): Promise<OrderWithDetails[]> {
  const response = await apiGet<OrderWithDetails[]>("orders");
  return response.data.map(normalizeOrder);
}

export async function getOrder(id: string): Promise<OrderWithDetails> {
  const response = await apiGet<OrderWithDetails>(`orders/${id}`);
  return normalizeOrder(response.data);
}

export async function createOrder(data: CreateOrderInput): Promise<OrderWithDetails> {
  const response = await apiPost<OrderWithDetails>("orders", data);
  return normalizeOrder(response.data);
}

