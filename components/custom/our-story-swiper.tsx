'use client'
import { IOurStory } from '@/types/product'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import OurStoryYearCard from '@/components/custom/our-story-year-card'
import 'swiper/css'
import Image from 'next/image'

const ourStory: IOurStory[] = [
    {
        id: 1,
        name: 'The Beginning',
        description:
            'Cyclify Bike Store was founded with a passion for bringing the joy of cycling to our local community.',
        year: '2013',
    },
    {
        id: 2,
        name: 'Expanding Inventory',
        description:
            'Expanded our inventory to include a diverse range of bikes, catering to all types of riders.',
        year: '2014',
    },
    {
        id: 3,
        name: 'First Community Event',
        description:
            'Launched our first community cycling event, bringing together enthusiasts from all over the city.',
        year: '2015',
    },
    {
        id: 5,
        name: 'Perfect Fit',
        description:
            'Introduced personalized fitting services to ensure every rider finds their perfect match.',
        year: '2016',
    },
    {
        id: 6,
        name: 'The Beginning',
        description:
            'Cyclify Bike Store was founded with a passion for bringing the joy of cycling to our local community.',
        year: '2020',
    },
    {
        id: 7,
        name: 'Expanding Inventory',
        description:
            'Expanded our inventory to include a diverse range of bikes, catering to all types of riders.',
        year: '2024',
    },
]

export default function OurStorySwiper() {
    return (
        <div className="bg-[url(/images/our-story-bg.jpg)] bg-cover bg-no-repeat py-12 lg:py-20">
            <div className="container">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-5 lg:mb-14">
                    <h2 className="text-lg font-bold uppercase lg:text-xl/6">
                        our&nbsp;
                        <span className="font-roboto font-medium italic">
                            story
                        </span>
                    </h2>

                    <div className="flex gap-5">
                        <button
                            type="button"
                            className="our-story-btn-prev grid size-8 place-content-center rounded-full text-black ring-1 ring-black transition lg:size-11"
                        >
                            <ArrowLeft className="size-4 lg:size-6" />
                        </button>
                        <button
                            type="button"
                            className="our-story-btn-next grid size-8 place-content-center rounded-full text-black ring-1 ring-black transition lg:size-11"
                        >
                            <ArrowRight className="size-4 lg:size-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/images/road.jpg"
                    alt="Road"
                    className="absolute inset-x-0 bottom-6 h-8 w-full object-cover md:bottom-[18px] md:h-10"
                    width={1330}
                    height={40}
                />
                <Image
                    src="/images/cycle.svg"
                    alt="Road"
                    className="absolute bottom-[38px] left-3/4 w-16 sm:w-20 md:left-[38%] lg:w-[140px] xl:left-[29%] xl:-ml-8"
                    width={140}
                    height={83}
                />
                <Swiper
                    className="our-story-swiper !grid px-4"
                    modules={[Navigation]}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    loop={true}
                    speed={1000}
                    navigation={{
                        nextEl: '.our-story-btn-next',
                        prevEl: '.our-story-btn-prev',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        620: {
                            slidesPerView: 1.3,
                        },
                        768: {
                            slidesPerView: 2.3,
                        },
                        1280: {
                            slidesPerView: 3.3,
                        },
                    }}
                >
                    {ourStory.map((ourStory, index) => (
                        <SwiperSlide key={index}>
                            <OurStoryYearCard
                                key={ourStory.id}
                                ourStory={ourStory}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
