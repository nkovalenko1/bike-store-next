import AddcartDrawer from '@/components/custom/add-cart-drawer'
import CycleDetailSwiper from '@/components/custom/cycle-detail-swiper'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
import RideBanner from '@/components/custom/ridebanner'
import { Button } from '@/components/ui/button'
import helper from '@/lib/helper'
import { Star } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Cycle details | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Cycle details | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/cycle-details',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/cycle-details`,
    },
}

export default function CycleDetails() {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <CycleDetailSwiper />
                <div className="container shrink-0 space-y-5 px-4 pt-12 lg:w-[500px] lg:max-w-none lg:space-y-[30px] lg:px-14 xl:w-[600px] xl:py-[100px] 2xl:w-[716px]">
                    <div>
                        <h1 className="mb-2 line-clamp-2 text-2xl font-bold sm:text-3xl md:text-4xl/tight lg:mb-4 xl:mb-[30px] xl:text-[50px]/[60px]">
                            Velocity Roadster
                        </h1>
                        <div>
                            <div className="mb-1 flex items-center gap-3 xl:mb-3">
                                <h2 className="text-2xl font-medium lg:text-3xl/10 xl:text-[40px]/[48px]">
                                    $9,999.00
                                </h2>
                                <span className="inline-block rounded-lg bg-success px-1.5 py-0.5 text-xs font-medium text-white lg:py-1 xl:rounded-xl xl:text-sm/4">
                                    50% Off
                                </span>
                            </div>
                            <p className="text-lg/[22px] font-medium text-gray line-through">
                                $19,999.00
                            </p>
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm/4 font-medium ring-1 ring-gray-100">
                        <div className="flex items-center gap-1.5">
                            <span>4.5</span>
                            <Star className="size-4 fill-[#EAB308] stroke-[#EAB308]" />
                        </div>
                        <span className="block h-4 w-px shrink-0 rounded-full bg-gray-100"></span>
                        <p>
                            1.5k&nbsp;
                            <span className="text-gray">Ratings</span>
                        </p>
                    </div>
                    <div className="border-y border-gray-100 py-5 xl:py-[30px]">
                        <div className="font-medium">
                            <span className="text-gray">color:&nbsp;</span>Pink
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                            <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-[:checked]:border-black">
                                <span className="block size-[18px] rounded-full bg-[#F43F5E]"></span>
                                <input
                                    name="color"
                                    type="radio"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                />
                            </div>
                            <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-[:checked]:border-black">
                                <span className="block size-[18px] rounded-full bg-[#F97316]"></span>
                                <input
                                    name="color"
                                    type="radio"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                />
                            </div>
                            <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-[:checked]:border-black">
                                <span className="block size-[18px] rounded-full bg-[#84CC16]"></span>
                                <input
                                    name="color"
                                    type="radio"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                />
                            </div>
                            <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-[:checked]:border-black">
                                <span className="block size-[18px] rounded-full bg-[#10B981]"></span>
                                <input
                                    name="color"
                                    type="radio"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                />
                            </div>
                            <div className="relative grid size-[30px] shrink-0 place-content-center rounded-full border border-transparent has-[:checked]:border-black">
                                <span className="block size-[18px] rounded-full bg-[#3B82F6]"></span>
                                <input
                                    name="color"
                                    type="radio"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                />
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-2.5 text-sm/4 font-medium uppercase text-gray">
                            Product Description
                        </h3>
                        <p className="line-clamp-5 text-base/[23px]">
                            Velocity Roadster is a lightweight, stylish bike
                            built for speed, agility, and smooth urban rides.
                            Ideal for cyclists who value performance, its
                            aerodynamic design ensures effortless handling and a
                            sleek look.
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Link href="/cart">
                            <Button type="button">Buy Now</Button>
                        </Link>
                        <AddcartDrawer
                            button={
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="border-black "
                                >
                                    Add to Cart
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="py-14 lg:py-20">
                <div className="container">
                    <div className="grid gap-4 text-base sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/cyclify-assurance.svg"
                                alt="Cyclify Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    Cyclify Assurance
                                </h4>
                                <p className="text-gray">
                                    100% genuine products. with Cyclify
                                    Guarantee.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/emi.svg"
                                alt="Cyclify Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    Easy EMIs
                                </h4>
                                <p className="text-gray">
                                    Avail easy EMIs with flexible payment
                                    options.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-[10px] bg-[#F7F7F7] px-4 py-6 lg:p-7">
                            <Image
                                src="/images/payment.svg"
                                alt="Cyclify Assurance"
                                className="size-10 shrink-0 md:size-[60px]"
                                width={60}
                                height={60}
                            />
                            <div className="space-y-2">
                                <h4 className="text-lg/[22px] font-medium">
                                    100% Secure Payments
                                </h4>
                                <p className="text-gray">
                                    Keep your transactions secure and
                                    worry-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:items-center">
                <div className="px-4 lg:ml-auto lg:max-w-[716px] xl:py-10">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        <span className="inline-block">
                            Discover the speed of the
                        </span>{' '}
                        <span className="font-roboto font-medium italic">
                            Velocity Roadster
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        Discover the Speed of the Velocity Roadster—crafted for
                        those who crave both speed and comfort. With its sleek
                        design and advanced features, this bike offers a
                        thrilling ride whether you’re commuting, racing, or
                        exploring new routes. Experience unmatched performance
                        and style on every journey.
                    </p>
                    <div className="mt-8 grid gap-x-4 gap-y-7 sm:grid-cols-2 md:gap-y-10 2xl:mt-14 2xl:gap-y-14">
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Aerodynamic Frame
                            </div>
                            <div>Lightweight and fast.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Precision Gears
                            </div>
                            <div>Smooth, reliable shifting.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                High-Performance Tires
                            </div>
                            <div>Excellent grip and stability.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Advanced Brakes
                            </div>
                            <div>Strong, responsive stopping power.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Comfort Design
                            </div>
                            <div>Ergonomic for long rides.</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Custom Fit
                            </div>
                            <div>Adjustable for a personalized ride.</div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:rounded-l-xl">
                    <Image
                        src="/images/velocity-road.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:items-center">
                <div className="px-4 lg:order-2 lg:max-w-[716px] xl:py-10">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        Easy Pedaling with
                        <span className="font-roboto font-medium italic">
                            Great Control
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        Experience a ride like never before with pedals
                        engineered for both comfort and control. Built to handle
                        any terrain, these pedals offer a secure grip and smooth
                        rotation, ensuring you stay in command no matter where
                        your journey takes you. Durable and reliable, they’re
                        designed to support every push, making each ride more
                        enjoyable and efficient.
                    </p>
                    <div className="mt-8 grid gap-x-4 gap-y-7 sm:grid-cols-2 md:gap-y-10 2xl:mt-14 2xl:gap-y-14">
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Transmission
                            </div>
                            <div>Gates Carbon Drive CDC</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Front Sprocket
                            </div>
                            <div>55 Tooth 5Bolt 130 BCD</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Belt
                            </div>
                            <div>118 Tooth CD</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium uppercase text-gray">
                                Metal Chain
                            </div>
                            <div>118 Tooth CD</div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:order-1 lg:rounded-r-xl">
                    <Image
                        src="/images/pendal.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10">
                <div className="px-4 lg:ml-auto lg:max-w-[716px] xl:py-24">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                        Wide
                        <span className="font-roboto font-medium italic">
                            tyres
                        </span>
                    </h2>
                    <p className="mt-3 text-base text-gray md:text-lg">
                        The design of the fork allows the mounting of wide rims
                        with “oversize” tires (up to 42 mm). This solution,
                        derived from cyclocross, gives stability to the bicycle.
                    </p>
                </div>
                <div className="max-h-[700px] overflow-hidden lg:rounded-l-xl">
                    <Image
                        src="/images/wide-tyres.jpg"
                        alt="Velocity Road"
                        className="h-full w-full object-cover"
                        width={940}
                        height={700}
                    />
                </div>
            </div>

            <div className="mt-14 px-4 lg:mt-20">
                <div className="mx-auto max-w-[1880px] rounded-[10px] bg-[url(/images/full-bg-design.jpeg)] bg-cover bg-center bg-no-repeat px-5 py-14 sm:px-10 lg:py-20 2xl:px-[100px]">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold md:text-5xl xl:text-[70px]/[84px]">
                            Specifications
                        </h2>
                        <p className="text-gray md:text-xl/6">
                            For the Cyclify Bike Store
                        </p>
                    </div>
                    <div className="mt-10 md:mt-14">
                        <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Riders age
                                </div>
                                <div className="text-gray">12+</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Frame
                                </div>
                                <div className="text-gray">
                                    Lightweight Alloy Frame of 16T
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Fork
                                </div>
                                <div className="text-gray">
                                    Threadless steel suspension
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Crank
                                </div>
                                <div className="text-gray">
                                    3spd 24TX34TX42T 170mm cotterless with
                                    deflector plate
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Bottom Bracket
                                </div>
                                <div className="text-gray">
                                    Cotterless BB cartridge
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Shifters
                                </div>
                                <div className="text-gray">
                                    Microshift 3x7spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Cog Set
                                </div>
                                <div className="text-gray">
                                    7spd 14T-28T free wheel
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Chain Wheel
                                </div>
                                <div className="text-gray">7sp-112 links</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Front Derailleur
                                </div>
                                <div className="text-gray">
                                    Microshift FD-M20, 3spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Rear Derailleur
                                </div>
                                <div className="text-gray">
                                    Microshift RD-M21L, 7spd
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Rims
                                </div>
                                <div className="text-gray">
                                    Double walled alloy rim
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Hubs
                                </div>
                                <div className="text-gray">ED black hub</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Tires
                                </div>
                                <div className="text-gray">
                                    26T x 2.35T wide Nylon tires
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Pedals
                                </div>
                                <div className="text-gray">
                                    Plastic body flat pedal
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Brakes
                                </div>
                                <div className="text-gray">
                                    Dual Mechanical Disc 160mm rotor plates
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Brake Levers
                                </div>
                                <div className="text-gray">
                                    Alloy 3-finger mechanical
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Handlebar
                                </div>
                                <div className="text-gray">
                                    Oversized 640mm XMR handlebar
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Stem
                                </div>
                                <div className="text-gray">XMR alloy stem</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Headset
                                </div>
                                <div className="text-gray">
                                    Oversized threadless with spacers
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Grips
                                </div>
                                <div className="text-gray">Closed TPE grip</div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Saddle
                                </div>
                                <div className="text-gray">
                                    Soft PU XMR saddle
                                </div>
                            </div>
                            <div className="space-y-2.5 border-b border-black/10 py-6 pr-5 sm:py-10">
                                <div className="text-lg/5 font-medium">
                                    Seat Post
                                </div>
                                <div className="text-gray">
                                    300mm ED black seat post
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FeedbackSwiper />
            <RideBanner />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Cycle details",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/cycle-details",
                        "description": "Your journey to the genuine begins here.",
                        "inLanguage": "en",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.svg",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Cycle details",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/cycle-details"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
