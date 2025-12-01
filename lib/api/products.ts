import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import type { Product, ProductWithVariants } from "@/types/product";
import type { ProductQueryInput, ProductInput } from "@/lib/validations/product";

export interface ProductsResponse {
  products: Product[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export async function getProducts(
  query?: Partial<ProductQueryInput>
): Promise<ProductsResponse> {
  const response = await apiGet<Product[]>("products", query);
  return {
    products: response.data,
    meta: response.meta || {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
    },
  };
}

export async function getProduct(id: string): Promise<ProductWithVariants> {
  const response = await apiGet<ProductWithVariants>(`products/${id}`);
  return response.data;
}

export async function createProduct(
  data: ProductInput
): Promise<ProductWithVariants> {
  const response = await apiPost<ProductWithVariants>("products", data);
  return response.data;
}

export async function updateProduct(
  id: string,
  data: Partial<ProductInput>
): Promise<ProductWithVariants> {
  const response = await apiPut<ProductWithVariants>(`products/${id}`, data);
  return response.data;
}

export async function deleteProduct(id: string): Promise<void> {
  await apiDelete(`products/${id}`);
}

