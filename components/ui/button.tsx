import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center font-aeonik gap-1.5 justify-center whitespace-nowrap rounded-lg lg:rounded-[10px] border px-4 py-2.5 border-black text-sm/[19px] font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-black hover:bg-transparent hover:text-black',
                outline: 'border border-gray-100 text-black hover:bg-black hover:text-white text-sm/none font-medium',
            },
            size: {
                default: 'default',
                icon: 'h-10 w-10 p-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
