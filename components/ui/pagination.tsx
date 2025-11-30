import * as React from 'react'

import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn('flex flex-row items-center gap-2.5', className)}
        {...props}
    />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, 'size'> &
    React.ComponentProps<'a'>

const PaginationLink = ({
    className,
    isActive,
    size = 'icon',
    ...props
}: PaginationLinkProps) => (
    <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? 'default' : 'outline',
                size,
            }),
            className,
        )}
        {...props}
    />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="icon"
        className={cn('gap-1', className)}
        {...props}
    >
        <ChevronLeftIcon className="size-5" />
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        size="icon"
        className={cn('gap-1', className)}
        {...props}
    >
        <ChevronRightIcon className="size-5" />
    </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
    className,
    ...props
}: React.ComponentProps<'span'>) => (
    <span
        aria-hidden
        className={cn(
            'grid size-10 place-content-center rounded-[10px] border border-gray-100 transition text-black',
            className,
        )}
        {...props}
    >
        <span>...</span>
        <span className="sr-only">More pages</span>
    </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}
