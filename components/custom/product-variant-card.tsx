import { cn } from '@/lib/utils'
import { IVariant } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductVariantCards({
    variants,
}: {
    variants: IVariant
}) {
    return (
        <div id={variants?.panelId} 
            className={cn(
                'panel group relative flex flex-col overflow-hidden rounded-[10px]',
                variants?.color,
            )}
        >
            <Link
                href="/cycle-details.html"
                className="absolute inset-0 z-10 rounded-[10px]"
            ></Link>
            <Image
                src={variants?.textImage}
                alt="Text"
                className="absolute inset-0 h-full w-full"
                width={620}
                height={860}
            />
            <div className="relative flex h-80 grow items-end justify-center px-4 py-5 sm:h-96 md:h-[550px] xl:py-11 2xl:h-[776px] 2xl:items-center">
                <Image
                    src={variants?.cycleImage}
                    alt={variants?.alt}
                    className="h-full w-full -rotate-[10deg] object-contain"
                    width={600}
                    height={600}
                />
            </div>
            <h2 className="relative mx-5 my-4 line-clamp-2 text-lg/5 font-medium transition-all group-hover:opacity-80 md:text-xl/6 lg:m-[30px]">
                {variants?.name}
            </h2>
        </div>
     
    )
}
