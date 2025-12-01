"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getOrder } from "@/lib/api/orders";
import type { OrderWithDetails } from "@/types/order";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";
import OrderDetails from "@/components/orders/order-details";

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<OrderWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError("ID заказа не указан");
      return;
    }

    const fetchOrder = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getOrder(orderId);
        setOrder(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ошибка загрузки заказа"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <ErrorMessage message={error || "Заказ не найден"} />
        <Link href="/" className="mt-4">
          <Button variant="outline">На главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-[calc(100vh-61px)] items-center justify-center px-4 pt-12 lg:py-20 lg:min-h-[calc(100vh-90px)]">
        <div className="w-full max-w-xl text-center text-gray">
          <div className="pb-5">
            <Image
              alt="Order success"
              src="/images/order-success.png"
              width={195}
              height={155}
              className="mx-auto"
            />
          </div>
          <div className="mt-5 space-y-2.5 font-medium">
            <h2 className="text-2xl font-medium text-black">
              Спасибо за заказ!
            </h2>
            <p className="text-lg/5">
              Ваш заказ успешно оформлен и принят в обработку!
            </p>
            <p className="text-sm">
              Вы получите письмо с подтверждением заказа на указанный email.
            </p>
            <p className="!mt-5 text-base/5 text-black underline underline-offset-2">
              Номер заказа:{" "}
              <span className="font-bold">{order.id.slice(0, 8)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 pb-20">
        <OrderDetails order={order} />
      </div>
    </>
  );
}

