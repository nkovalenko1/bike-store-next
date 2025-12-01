import type { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  variantId: string | null;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product?: Product;
  variant?: ProductVariant | null;
}

export interface CartItemWithDetails extends CartItem {
  product: Product;
  variant: ProductVariant | null;
}

