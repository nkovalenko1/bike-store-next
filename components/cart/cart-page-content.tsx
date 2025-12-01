"use client";

import { useEffect, useState } from "react";
import ProductCartCard from "@/components/custom/product-cart-card";
import OrderForm from "@/components/orders/order-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";
import { useCartStore } from "@/lib/stores/cart-store";
import Link from "next/link";
import Image from "next/image";

export default function CartPageContent() {
  const { items, syncWithServer, getTotal, isLoading } = useCartStore();
  const [showOrderForm, setShowOrderForm] = useState(false);

  useEffect(() => {
    syncWithServer();
  }, [syncWithServer]);

  if (isLoading && items.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="max-w-32">
          <Image
            src="/images/my-cart.png"
            alt="Empty cart"
            className="h-full w-full"
            width={400}
            height={400}
          />
        </div>
        <div className="max-w-xs">
          <h1 className="mb-4 font-roboto text-xl font-medium italic text-gray lg:text-2xl">
            Корзина пуста
          </h1>
          <Link href="/cycle-collections">
            <Button type="button" className="uppercase">
              Добавить товары
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getTotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="grid lg:grid-cols-2">
      <div className="container order-2 ml-auto w-full divide-y divide-gray-100 py-12 lg:order-1 lg:!mr-0 lg:max-w-[570px] lg:px-10 xl:py-20 xl:pr-14">
        {showOrderForm ? (
          <OrderForm
            onSuccess={(orderId) => {
              window.location.href = `/order-success?orderId=${orderId}`;
            }}
          />
        ) : (
          <div className="space-y-4">
            <h1 className="text-lg/[22px] font-medium">
              Информация о доставке
            </h1>
            <p className="text-sm text-gray-600">
              Заполните форму ниже, чтобы создать заказ
            </p>
            <Button
              type="button"
              onClick={() => setShowOrderForm(true)}
              className="w-full"
            >
              Перейти к оформлению заказа
            </Button>
          </div>
        )}
      </div>

      <div className="order-1 lg:order-2">
        <div className="bg-gray-100 lg:sticky lg:top-[90px] lg:min-h-[calc(100vh-90px)]">
          <div className="container mr-auto space-y-10 px-4 py-12 lg:!ml-0 lg:max-w-[612px] lg:px-10 xl:px-14 xl:py-20">
            <div className="space-y-5">
              {items.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex items-start gap-5 lg:items-center"
                >
                  <Link
                    href={`/cycle-details/${cartItem.productId}`}
                    className="group relative flex size-16 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white sm:size-20 lg:size-[100px]"
                  >
                    <span className="absolute -right-2 -top-2 grid min-w-[24px] place-content-center rounded-full bg-gray px-1.5 py-0.5 font-bold text-white sm:h-[24px]">
                      {cartItem.quantity}
                    </span>
                    {cartItem.product?.images?.[0] && (
                      <Image
                        src={cartItem.product.images[0]}
                        alt={cartItem.product.name}
                        className="h-full w-full object-contain transition group-hover:opacity-80"
                        width={940}
                        height={700}
                      />
                    )}
                  </Link>
                  <div className="flex grow flex-col justify-between gap-1.5 sm:flex-row sm:items-center sm:gap-5">
                    <Link
                      href={`/cycle-details/${cartItem.productId}`}
                      className="line-clamp-2 font-medium transition hover:opacity-80 lg:line-clamp-3 lg:text-lg/[22px]"
                    >
                      {cartItem.product?.name}
                      {cartItem.variant?.name && ` - ${cartItem.variant.name}`}
                    </Link>
                    <h3 className="line-clamp-2 shrink-0 font-medium lg:text-lg/[22px]">
                      $
                      {(
                        (cartItem.variant?.price ?? cartItem.product?.price ?? 0) *
                        cartItem.quantity
                      ).toFixed(2)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-gray">
              <div className="flex justify-between gap-3">
                <p>Subtotal ({items.length} items)</p>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <p>Shipping</p>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium text-black">Total</h3>
                </div>
                <span className="text-lg font-medium text-black">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

