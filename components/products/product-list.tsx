"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/custom/product-card";
import ProductFilters from "@/components/products/product-filters";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";
import NotFound from "@/components/ui/not-found";
import { getProducts, type ProductsResponse } from "@/lib/api/products";
import type { ProductQueryInput } from "@/lib/validations/product";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductListProps {
  initialCategory?: string;
}

export default function ProductList({ initialCategory }: ProductListProps) {
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Partial<ProductQueryInput>>({
    page: 1,
    limit: 12,
    sortBy: "createdAt",
    sortOrder: "desc",
    category: initialCategory,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProducts(filters);
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ошибка загрузки товаров"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<ProductQueryInput>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  if (isLoading && !products) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} className="mx-auto max-w-2xl" />;
  }

  if (!products || products.products.length === 0) {
    return (
      <NotFound
        title="Товары не найдены"
        message="Попробуйте изменить параметры поиска"
      />
    );
  }

  return (
    <div className="space-y-8">
      <ProductFilters
        onFilterChange={handleFilterChange}
        initialFilters={filters}
      />

      <div className="mx-auto grid max-w-[1852px] gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-14">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.meta.totalPages > 1 && (
        <Pagination className="mt-10 md:mt-14">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (filters.page && filters.page > 1) {
                    handlePageChange(filters.page - 1);
                  }
                }}
                className={
                  filters.page === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: products.meta.totalPages }, (_, i) => i + 1)
              .filter((page) => {
                const currentPage = filters.page || 1;
                return (
                  page === 1 ||
                  page === products.meta.totalPages ||
                  Math.abs(page - currentPage) <= 1
                );
              })
              .map((page, index, array) => {
                const prevPage = array[index - 1];
                const showEllipsis = prevPage && page - prevPage > 1;

                return (
                  <div key={page} className="flex items-center">
                    {showEllipsis && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                        isActive={filters.page === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  </div>
                );
              })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    filters.page &&
                    filters.page < products.meta.totalPages
                  ) {
                    handlePageChange(filters.page + 1);
                  }
                }}
                className={
                  filters.page === products.meta.totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

