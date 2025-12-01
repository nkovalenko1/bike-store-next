"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/api/orders";
import type { OrderWithDetails } from "@/types/order";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ErrorMessage from "@/components/ui/error-message";
import OrderDetails from "@/components/orders/order-details";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import helper from "@/lib/helper";
import { Metadata } from "next";

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ошибка загрузки заказов"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} className="mx-auto max-w-2xl" />;
  }

  const selectedOrderData = orders.find((o) => o.id === selectedOrder);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Мои заказы</h1>

      {orders.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <p className="mb-4 text-lg text-gray-600">У вас пока нет заказов</p>
          <Link href="/cycle-collections">
            <Button>Перейти к каталогу</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Список заказов</h2>
            {orders.map((order) => (
              <div
                key={order.id}
                className={`cursor-pointer rounded-lg border p-4 transition hover:border-black ${
                  selectedOrder === order.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200"
                }`}
                onClick={() =>
                  setSelectedOrder(
                    selectedOrder === order.id ? null : order.id
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Заказ #{order.id.slice(0, 8)}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString("ru-RU")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">{order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            {selectedOrderData ? (
              <OrderDetails order={selectedOrderData} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                <p className="text-gray-600">
                  Выберите заказ для просмотра деталей
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

