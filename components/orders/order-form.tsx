"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createOrderSchema,
  type CreateOrderInput,
} from "@/lib/validations/order";
import { createOrder } from "@/lib/api/orders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/stores/cart-store";
import ErrorMessage from "@/components/ui/error-message";

interface OrderFormProps {
  onSuccess?: (orderId: string) => void;
}

export default function OrderForm({ onSuccess }: OrderFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateOrderInput>({
    resolver: zodResolver(createOrderSchema),
  });

  const country = watch("shippingAddress.country");

  const onSubmit = async (data: CreateOrderInput) => {
    try {
      setIsLoading(true);
      setError(null);
      const order = await createOrder(data);
      await clearCart();
      
      if (onSuccess) {
        onSuccess(order.id);
      } else {
        router.push(`/order-success?orderId=${order.id}`);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ошибка создания заказа"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <ErrorMessage message={error} />}

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Адрес доставки</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              Имя *
            </label>
            <Input
              id="firstName"
              {...register("shippingAddress.firstName")}
              disabled={isLoading}
            />
            {errors.shippingAddress?.firstName && (
              <p className="text-sm text-red-600">
                {errors.shippingAddress.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Фамилия *
            </label>
            <Input
              id="lastName"
              {...register("shippingAddress.lastName")}
              disabled={isLoading}
            />
            {errors.shippingAddress?.lastName && (
              <p className="text-sm text-red-600">
                {errors.shippingAddress.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            {...register("shippingAddress.email")}
            disabled={isLoading}
          />
          {errors.shippingAddress?.email && (
            <p className="text-sm text-red-600">
              {errors.shippingAddress.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Телефон *
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("shippingAddress.phone")}
            disabled={isLoading}
          />
          {errors.shippingAddress?.phone && (
            <p className="text-sm text-red-600">
              {errors.shippingAddress.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">
            Адрес *
          </label>
          <Input
            id="address"
            {...register("shippingAddress.address")}
            disabled={isLoading}
          />
          {errors.shippingAddress?.address && (
            <p className="text-sm text-red-600">
              {errors.shippingAddress.address.message}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium">
              Город *
            </label>
            <Input
              id="city"
              {...register("shippingAddress.city")}
              disabled={isLoading}
            />
            {errors.shippingAddress?.city && (
              <p className="text-sm text-red-600">
                {errors.shippingAddress.city.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="postalCode" className="text-sm font-medium">
              Почтовый индекс *
            </label>
            <Input
              id="postalCode"
              {...register("shippingAddress.postalCode")}
              disabled={isLoading}
            />
            {errors.shippingAddress?.postalCode && (
              <p className="text-sm text-red-600">
                {errors.shippingAddress.postalCode.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium">
            Страна *
          </label>
          <Select
            value={country}
            onValueChange={(value) =>
              setValue("shippingAddress.country", value)
            }
            disabled={isLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Russia">Россия</SelectItem>
                <SelectItem value="Armenia">Армения</SelectItem>
                <SelectItem value="Kazakhstan">Казахстан</SelectItem>
                <SelectItem value="Belarus">Беларусь</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.shippingAddress?.country && (
            <p className="text-sm text-red-600">
              {errors.shippingAddress.country.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Создание заказа..." : "Создать заказ"}
      </Button>
    </form>
  );
}

