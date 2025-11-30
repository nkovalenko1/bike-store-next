import { create } from "zustand";

type SortBy = "name" | "price" | "createdAt";
type SortOrder = "asc" | "desc";

interface ProductFilters {
  category: string | null;
  search: string;
  minPrice: number | null;
  maxPrice: number | null;
  sortBy: SortBy;
  sortOrder: SortOrder;
}

interface ProductState {
  filters: ProductFilters;
  page: number;
  limit: number;
}

interface ProductActions {
  setCategory: (category: string | null) => void;
  setSearch: (search: string) => void;
  setPriceRange: (min: number | null, max: number | null) => void;
  setSorting: (sortBy: SortBy, sortOrder: SortOrder) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  resetFilters: () => void;
  getQueryParams: () => Record<string, string>;
}

type ProductStore = ProductState & ProductActions;

const defaultFilters: ProductFilters = {
  category: null,
  search: "",
  minPrice: null,
  maxPrice: null,
  sortBy: "createdAt",
  sortOrder: "desc",
};

export const useProductStore = create<ProductStore>()((set, get) => ({
  filters: defaultFilters,
  page: 1,
  limit: 10,

  setCategory: (category) => {
    set({ filters: { ...get().filters, category }, page: 1 });
  },

  setSearch: (search) => {
    set({ filters: { ...get().filters, search }, page: 1 });
  },

  setPriceRange: (minPrice, maxPrice) => {
    set({ filters: { ...get().filters, minPrice, maxPrice }, page: 1 });
  },

  setSorting: (sortBy, sortOrder) => {
    set({ filters: { ...get().filters, sortBy, sortOrder }, page: 1 });
  },

  setPage: (page) => {
    set({ page });
  },

  setLimit: (limit) => {
    set({ limit, page: 1 });
  },

  resetFilters: () => {
    set({ filters: defaultFilters, page: 1 });
  },

  getQueryParams: () => {
    const { filters, page, limit } = get();
    const params: Record<string, string> = {
      page: String(page),
      limit: String(limit),
      sortBy: filters.sortBy,
      sortOrder: filters.sortOrder,
    };

    if (filters.category) params.category = filters.category;
    if (filters.search) params.search = filters.search;
    if (filters.minPrice !== null) params.minPrice = String(filters.minPrice);
    if (filters.maxPrice !== null) params.maxPrice = String(filters.maxPrice);

    return params;
  },
}));

