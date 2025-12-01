"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import type { ProductQueryInput } from "@/lib/validations/product";

interface ProductFiltersProps {
  onFilterChange: (filters: Partial<ProductQueryInput>) => void;
  initialFilters?: Partial<ProductQueryInput>;
}

export default function ProductFilters({
  onFilterChange,
  initialFilters = {},
}: ProductFiltersProps) {
  const [search, setSearch] = useState(initialFilters.search || "");
  const [category, setCategory] = useState(initialFilters.category || "");
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || "createdAt");
  const [sortOrder, setSortOrder] = useState(
    initialFilters.sortOrder || "desc"
  );
  const [minPrice, setMinPrice] = useState(
    initialFilters.minPrice?.toString() || ""
  );
  const [maxPrice, setMaxPrice] = useState(
    initialFilters.maxPrice?.toString() || ""
  );

  const handleApplyFilters = () => {
    onFilterChange({
      search: search || undefined,
      category: category || undefined,
      sortBy: sortBy as "name" | "price" | "createdAt",
      sortOrder: sortOrder as "asc" | "desc",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setSortBy("createdAt");
    setSortOrder("desc");
    setMinPrice("");
    setMaxPrice("");
    onFilterChange({
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Поиск товаров..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={handleApplyFilters} size="sm">
          Применить
        </Button>
        {(search || category || minPrice || maxPrice) && (
          <Button onClick={handleReset} variant="outline" size="sm">
            <X className="size-4" />
          </Button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Категория</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Все категории</SelectItem>
              <SelectItem value="road">Дорожные</SelectItem>
              <SelectItem value="mountain">Горные</SelectItem>
              <SelectItem value="city">Городские</SelectItem>
              <SelectItem value="kids">Детские</SelectItem>
              <SelectItem value="women">Женские</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Сортировка</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">По дате</SelectItem>
              <SelectItem value="name">По названию</SelectItem>
              <SelectItem value="price">По цене</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Порядок</label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">По убыванию</SelectItem>
              <SelectItem value="asc">По возрастанию</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Цена</label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="От"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full"
            />
            <Input
              type="number"
              placeholder="До"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

