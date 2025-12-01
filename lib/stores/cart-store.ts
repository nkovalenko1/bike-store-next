import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/product";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart as clearCartApi,
} from "@/lib/api/cart";
import type { AddToCartInput } from "@/lib/validations/cart";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

interface CartActions {
  syncWithServer: () => Promise<void>;
  addItem: (item: AddToCartInput) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isLoading: false,
      error: null,

      syncWithServer: async () => {
        try {
          set({ isLoading: true, error: null });
          const items = await getCart();
          set({ items, isLoading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Ошибка загрузки корзины",
            isLoading: false,
          });
        }
      },

      addItem: async (item: AddToCartInput) => {
        try {
          set({ isLoading: true, error: null });
          await addToCart(item);
          await get().syncWithServer();
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Ошибка добавления в корзину",
            isLoading: false,
          });
          throw error;
        }
      },

      removeItem: async (id: string) => {
        try {
          set({ isLoading: true, error: null });
          await removeCartItem(id);
          await get().syncWithServer();
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Ошибка удаления из корзины",
            isLoading: false,
          });
          throw error;
        }
      },

      updateQuantity: async (id: string, quantity: number) => {
        if (quantity <= 0) {
          await get().removeItem(id);
          return;
        }

        try {
          set({ isLoading: true, error: null });
          await updateCartItem(id, { quantity });
          await get().syncWithServer();
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Ошибка обновления количества",
            isLoading: false,
          });
          throw error;
        }
      },

      clearCart: async () => {
        try {
          set({ isLoading: true, error: null });
          await clearCartApi();
          set({ items: [], isLoading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Ошибка очистки корзины",
            isLoading: false,
          });
          throw error;
        }
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      getTotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.variant?.price ?? item.product?.price ?? 0;
          return total + price * item.quantity;
        }, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

