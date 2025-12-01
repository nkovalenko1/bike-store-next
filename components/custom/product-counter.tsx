'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import React, { useState, useEffect } from 'react'

interface ProductCounterProps {
    variant?: 'default' | 'outline' | 'black'
    value?: number
    onChange?: (value: number) => void
    min?: number
    max?: number
}

function ProductCounter({ 
    variant = 'black',
    value: controlledValue,
    onChange,
    min = 1,
    max
}: ProductCounterProps) {
    const [count, setCount] = useState(controlledValue ?? 1)

    useEffect(() => {
        if (controlledValue !== undefined) {
            setCount(controlledValue)
        }
    }, [controlledValue])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value)
        if (!isNaN(newValue) && newValue >= min && (max === undefined || newValue <= max)) {
            setCount(newValue)
            onChange?.(newValue)
        }
    }

    const handleIncrement = () => {
        const newValue = count + 1
        if (max === undefined || newValue <= max) {
            setCount(newValue)
            onChange?.(newValue)
        }
    }

    const handleDecrement = () => {
        if (count > min) {
            const newValue = count - 1
            setCount(newValue)
            onChange?.(newValue)
        }
    }

    return (
        <div
            className={cn('inline-flex items-center sm:gap-1', {
                '': variant === 'black',
                '': variant === 'default',
            })}
        >
            <button
                type="button"
                onClick={handleDecrement}
                className="bg-gray-300 grid size-5 shrink-0 place-content-center rounded-xl text-gray hover:text-black"
            >
                <Minus className="size-4 lg:size-5" />
                <span className="sr-only">Minus</span>
            </button>
            <Input
                type="text"
                onChange={handleInputChange}
                value={count}
                className="w-6 lg:w-10 rounded-md border-0 bg-transparent px-0.5 py-1.5 lg:py-2.5 text-center text-sm/tight lg:text-lg/[22px] placeholder:text-sm/tight"
                placeholder="1"
                min="1"
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="bg-gray-300 text- grid size-5 shrink-0 place-content-center rounded-xl text-gray hover:text-black"
            >
                <Plus className="size-4 lg:size-5" />
                <span className="sr-only">Plus</span>
            </button>
        </div>
    )
}

export default ProductCounter
