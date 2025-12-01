import { apiGet, apiPost } from "./client";
import type { Order, OrderWithDetails } from "@/types/order";
import type { CreateOrderInput } from "@/lib/validations/order";

export async function getOrders(): Promise<OrderWithDetails[]> {
  const response = await apiGet<OrderWithDetails[]>("orders");
  return response.data;
}

export async function getOrder(id: string): Promise<OrderWithDetails> {
  const response = await apiGet<OrderWithDetails>(`orders/${id}`);
  return response.data;
}

export async function createOrder(data: CreateOrderInput): Promise<OrderWithDetails> {
  const response = await apiPost<OrderWithDetails>("orders", data);
  return response.data;
}

