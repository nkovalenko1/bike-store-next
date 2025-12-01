'use client'

import ProductCounter from '@/components/custom/product-counter'
import { Button } from '@/components/ui/button'
import { CartItem } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/stores/cart-store'
import { useState } from 'react'

interface ProductCartCardProps {
    cartItem: CartItem
}

export default function ProductCartCard({ cartItem }: ProductCartCardProps) {
    const { removeItem, updateQuantity } = useCartStore()
    const [isRemoving, setIsRemoving] = useState(false)

    const product = cartItem.product
    const variant = cartItem.variant
    const price = variant?.price ?? product?.price ?? 0
    const image = variant?.image ?? product?.images?.[0] ?? '/images/placeholder.png'
    const productName = product?.name ?? 'Товар'
    const productId = product?.id ?? ''

    const handleRemove = async () => {
        try {
            setIsRemoving(true)
            await removeItem(cartItem.id)
        } catch (error) {
            console.error('Ошибка удаления товара:', error)
        } finally {
            setIsRemoving(false)
        }
    }

    const handleQuantityChange = async (newQuantity: number) => {
        try {
            await updateQuantity(cartItem.id, newQuantity)
        } catch (error) {
            console.error('Ошибка обновления количества:', error)
        }
    }

    return (
        <div className="flex gap-5 py-[30px] lg:items-center">
            <Link
                href={`/cycle-details/${productId}`}
                className="group relative flex size-20 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white sm:size-24 lg:size-[130px]"
            >
                <span className="absolute -right-2 -top-2 grid min-w-[24px] place-content-center rounded-full bg-gray px-1.5 py-0.5 font-bold text-white sm:h-[24px]">
                    {cartItem.quantity}
                </span>
                <Image
                    src={image}
                    alt={productName}
                    className="h-full w-full object-contain transition group-hover:opacity-80"
                    width={940}
                    height={700}
                />
            </Link>
            <div className="flex grow flex-row items-center justify-between gap-5">
                <div className="space-y-3 lg:space-y-5">
                    <div className="space-y-1.5">
                        <Link
                            href={`/cycle-details/${productId}`}
                            className="line-clamp-2 text-lg/5 transition hover:opacity-80 lg:text-[22px]/[26px]"
                        >
                            {productName}
                            {variant?.name && ` - ${variant.name}`}
                        </Link>
                        <h3 className="line-clamp-2 shrink-0 text-lg/[22px] font-medium lg:hidden lg:text-xl/6">
                            ${(price * cartItem.quantity).toFixed(2)}
                        </h3>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="inline-flex h-full rounded-md border border-black/10 px-2 lg:rounded-xl lg:px-3">
                            <ProductCounter
                                value={cartItem.quantity}
                                onChange={handleQuantityChange}
                                min={1}
                            />
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-auto border-black/10 p-1.5 px-3 py-1 text-sm text-gray lg:hidden lg:text-base/[19px]"
                            onClick={handleRemove}
                            disabled={isRemoving}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
                <div className="space-y-3 lg:space-y-5">
                    <h3 className="line-clamp-2 hidden shrink-0 text-lg/[22px] font-medium lg:block lg:text-xl/6">
                        ${(price * cartItem.quantity).toFixed(2)}
                    </h3>
                    <Button
                        type="button"
                        variant="outline"
                        className="hidden border-black/10 text-sm text-gray lg:block lg:text-base/[19px]"
                        onClick={handleRemove}
                        disabled={isRemoving}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    )
}
