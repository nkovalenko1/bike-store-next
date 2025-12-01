"use client";

import { useState, useEffect } from "react";
import { createPayment } from "@/lib/api/payments";
import type { PaymentInput } from "@/lib/validations/payment";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error-message";
import LoadingSpinner from "@/components/ui/loading-spinner";

interface PaymentFormProps {
  orderId: string;
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function PaymentForm({
  orderId,
  amount,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const paymentData: PaymentInput = {
        orderId,
        amount,
      };

      const result = await createPayment(paymentData);

      // Here you would integrate with CloudPayments widget
      // For now, we'll just show a success message
      // In production, you would initialize the CloudPayments widget with result.widget

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Ошибка инициализации платежа";
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && <ErrorMessage message={error} />}

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-medium">Оплата заказа</h3>
        <div className="mb-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Сумма к оплате:</span>
            <span className="font-medium">${amount.toFixed(2)}</span>
          </div>
        </div>

        <Button
          type="button"
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Инициализация платежа...
            </>
          ) : (
            "Оплатить"
          )}
        </Button>

        <p className="mt-4 text-xs text-gray-500">
          Все транзакции защищены и зашифрованы
        </p>
      </div>
    </div>
  );
}

