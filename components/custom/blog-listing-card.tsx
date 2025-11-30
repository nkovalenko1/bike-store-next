import { IBlogListing } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogListingCard({ data }: { data: IBlogListing }) {
    return (
        <div className="flex shrink-0 flex-col overflow-hidden rounded-[10px] bg-[url(/images/collection-bg.jpg)] bg-cover bg-no-repeat">
            <Link
                href="/blogs/blog-details"
                className="group flex h-52 shrink-0 items-center justify-center p-2 lg:h-60"
            >
                <Image
                    src={data?.image}
                    alt="Blog-image"
                    width={274}
                    height={400}
                    className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="flex grow flex-col gap-2 p-4">
                <span className="text-brown block text-xs/tight font-bold uppercase tracking-wide">
                    {data?.category}
                </span>
                <Link
                    href="/blogs/blog-details"
                    className="line-clamp-2 block text-base/5 font-semibold text-black transition hover:opacity-80"
                >
                    {data?.title}
                </Link>
                <p className="text-brown mb-2.5 line-clamp-2 text-sm/5">
                    {data?.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4">
                    <Link
                        href="/blogs/blog-details"
                        className="block shrink-0 text-sm/5  hover:opacity-80 font-bold transition"
                    >
                        Read more...
                    </Link>
                    <p className="text-brown shrink-0 text-xs/tight">
                        {data?.date}
                    </p>
                </div>
            </div>
        </div>
    )
}
