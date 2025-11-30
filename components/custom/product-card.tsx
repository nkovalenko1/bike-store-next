import { Button } from '@/components/ui/button'
import { ICard } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ card }: { card: ICard }) {
    return (
        <div className="flex shrink-0 flex-col overflow-hidden rounded-[10px] bg-[url(/images/collection-bg.jpg)] bg-cover bg-no-repeat h-full">
            <Link href='/cycle-details' className="group flex h-52 items-center justify-center p-2 lg:h-60 xl:h-[348px] shrink-0">
                <Image
                    src={card?.image}
                    alt={card?.alt}
                    className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
                    width={404}
                    height={332}
                />
            </Link>
            <div className="flex h-full flex-col items-start gap-5 p-5">
                <div className="grow">
                    <Link
                        href="/cycle-details"
                        className="mb-2 inline-block text-xl/6 font-medium transition hover:opacity-80"
                    >
                        {card?.name}
                    </Link>
                    <p className="line-clamp-2 text-gray">
                     {card?.description}
                    </p>
                </div>
                <Link href="/cycle-details">
                    <Button type="button">Shop now</Button>
                </Link>
            </div>
        </div>
    )
}
