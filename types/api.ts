export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: PaginationMeta;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ProductQueryParams extends PaginationParams {
  category?: string;
  search?: string;
  sortBy?: "name" | "price" | "createdAt";
  sortOrder?: "asc" | "desc";
  minPrice?: number;
  maxPrice?: number;
}

export interface CartItemPayload {
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface CreateOrderPayload {
  shippingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface CreatePaymentPayload {
  orderId: string;
}

export interface PaymentWidgetData {
  publicId: string;
  description: string;
  amount: number;
  currency: string;
  invoiceId: string;
  accountId: string;
  email?: string;
  skin: string;
}

export interface CreatePaymentResponse {
  paymentId: string;
  widget: PaymentWidgetData;
}

