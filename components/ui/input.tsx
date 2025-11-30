import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

const inputVariants = cva(
    'placeholder:text-gary flex w-full text-base/[19px] bg-transparent px-3 py-1 font-medium outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default: '',
                outline: 'border border-black/10 font-normal rounded-xl p-3.5 leading-5 focus:border-black',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
        asChild?: boolean
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({  className,
        variant,
        type,
        asChild = false,
        ...props }, ref) => {
            const Comp = asChild ? Slot : 'input'
        return (
            <Comp
                type={type}
                className={cn(
                    inputVariants({
                        variant,
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
Input.displayName = 'Input'

export { Input, inputVariants }
