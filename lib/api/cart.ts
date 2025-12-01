import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import type { CartItem } from "@/types/product";
import type { AddToCartInput, UpdateCartInput } from "@/lib/validations/cart";

export async function getCart(): Promise<CartItem[]> {
  const response = await apiGet<CartItem[]>("cart");
  return response.data;
}

export async function addToCart(data: AddToCartInput): Promise<CartItem> {
  const response = await apiPost<CartItem>("cart", data);
  return response.data;
}

export async function updateCartItem(
  id: string,
  data: UpdateCartInput
): Promise<CartItem> {
  const response = await apiPut<CartItem>(`cart/${id}`, data);
  return response.data;
}

export async function removeCartItem(id: string): Promise<void> {
  await apiDelete(`cart/${id}`);
}

export async function clearCart(): Promise<void> {
  await apiDelete("cart");
}

