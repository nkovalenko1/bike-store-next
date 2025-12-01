import type { OrderWithDetails } from "@/types/order";
import Image from "next/image";
import Link from "next/link";

interface OrderDetailsProps {
  order: OrderWithDetails;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-medium">Информация о заказе</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Номер заказа:</span>
            <span className="font-medium">{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Статус:</span>
            <span className="font-medium">{order.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Дата создания:</span>
            <span className="font-medium">
              {new Date(order.createdAt).toLocaleDateString("ru-RU")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Сумма:</span>
            <span className="font-medium">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {order.items && order.items.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">Товары</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0"
              >
                {item.product?.images?.[0] && (
                  <Link href={`/cycle-details/${item.productId}`}>
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </Link>
                )}
                <div className="flex-1">
                  <Link
                    href={`/cycle-details/${item.productId}`}
                    className="font-medium hover:opacity-80"
                  >
                    {item.product?.name}
                    {item.variant?.name && ` - ${item.variant.name}`}
                  </Link>
                  <p className="text-sm text-gray-600">
                    Количество: {item.quantity}
                  </p>
                </div>
                <div className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-medium">Адрес доставки</h2>
        <div className="text-sm">
          <p>
            {order.shippingAddress.firstName}{" "}
            {order.shippingAddress.lastName}
          </p>
          <p>{order.shippingAddress.address}</p>
          <p>
            {order.shippingAddress.city}, {order.shippingAddress.postalCode}
          </p>
          <p>{order.shippingAddress.country}</p>
          <p className="mt-2">Телефон: {order.shippingAddress.phone}</p>
          <p>Email: {order.shippingAddress.email}</p>
        </div>
      </div>

      {order.payment && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">Платеж</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Статус:</span>
              <span className="font-medium">{order.payment.status}</span>
            </div>
            {order.payment.transactionId && (
              <div className="flex justify-between">
                <span className="text-gray-600">ID транзакции:</span>
                <span className="font-medium">
                  {order.payment.transactionId}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

