'use client'
import ProductCard from '@/components/custom/product-card'
import { ICard } from '@/types/product'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const card: ICard[] = [
    {
        id: 1,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle1.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 2,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle2.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 3,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle3.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 4,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle4.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 5,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle5.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },
    {
        id: 6,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle1.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 7,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle2.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 8,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle3.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },

    {
        id: 9,
        name: 'Velocity Roadster',
        image: '/images/collection-cycle4.png',
        alt: 'Velocity Roadster',
        description: 'The Ultimate Ride for Road Enthusiasts',
    },
]

export default function ProductCollectionSwiper() {
    return (
        <>
            <div className="mb-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <h2 className="text-xl/6 font-medium">Latest Collection</h2>
                    <a
                        href="/cycle-listing"
                        className="inline-flex p-0.5 text-gray underline underline-offset-4 transition hover:opacity-80"
                    >
                        Discover Our Newest Picks
                    </a>
                </div>
                <div className="flex gap-2.5">
                    <button
                        type="button"
                        className="collection-button-prev grid size-10 place-content-center rounded-full bg-white text-black ring-1 ring-black"
                    >
                        <ArrowLeft className="size-5 shrink-0" />
                    </button>
                    <button
                        type="button"
                        className="collection-button-next grid size-10 place-content-center rounded-full bg-white text-black ring-1 ring-black"
                    >
                        <ArrowRight className="size-5 shrink-0" />
                    </button>
                </div>
            </div>
            <Swiper
                className="latest-collection-swiper !grid"
                modules={[Navigation]}
                slidesPerView={'auto'}
                spaceBetween={10}
                speed={1000}
                navigation={{
                    nextEl: '.collection-button-next',
                    prevEl: '.collection-button-prev',
                }}
            >
                {card.map((card, index) => (
                    <SwiperSlide key={index} className="!w-72 xl:!w-[420px]">
                        <ProductCard key={card.id} card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
