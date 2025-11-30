import CountsUp from '@/components/custom/counts-up'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
import OurStorySwiper from '@/components/custom/our-story-swiper'
import RideBanner from '@/components/custom/ridebanner'
import helper from '@/lib/helper'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'About Us | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'About us | cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/about-us',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
    },
}

export default function AboutUs() {
    return (
        <>
            <div className="flex bg-[url(/images/about-hero-banner.jpg)] bg-cover bg-no-repeat py-12 text-white lg:min-h-[calc(100vh-90px)] lg:py-[100px]">
                <div className="container flex grow flex-col justify-between gap-16 sm:gap-24">
                    <div className="flex flex-col items-start justify-between xl:flex-row xl:gap-10">
                        <div className="mb-3 shrink-0 lg:mb-[30px]">
                            <h1 className="mb-3 text-2xl font-bold md:text-5xl/[60px] lg:mb-5 lg:text-6xl/[70px] xl:text-[70px]/[84px]">
                                History of &nbsp;
                                <span className="font-roboto font-medium italic">
                                    Cyclify
                                </span>
                            </h1>
                            <h2 className="font-medium italic lg:text-xl/6">
                                Pedal Your Way to Joy.
                            </h2>
                        </div>
                        <p className="max-w-[500px] lg:text-lg/[26px]">
                            At Cyclify, you&apos;ll discover a handpicked selection
                            of bicycles, motorcycles, gear, and accessories from
                            top brands known for their quality and innovation.
                            We provide everything you need to elevate your ride.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-5 lg:gap-10 xl:gap-[100px]">
                        <div>
                            <h3 className="mb-2 font-roboto text-2xl font-medium lg:text-4xl xl:mb-5 xl:text-[50px]/[59px]">
                                <CountsUp
                                    start={0}
                                    end={98}
                                    duration={2}
                                    delay={0}
                                />
                                %
                            </h3>
                            <p className="text-sm font-medium lg:text-base/[19px]">
                                Rider Success Stories
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 font-roboto text-2xl font-medium lg:text-4xl xl:mb-5 xl:text-[50px]/[59px]">
                                <CountsUp
                                    start={0}
                                    end={50}
                                    duration={2}
                                    delay={0}
                                />
                                +
                            </h3>
                            <p className="text-sm font-medium lg:text-base/[19px]">
                                Weekly New Arrivals
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 font-roboto text-2xl font-medium lg:text-4xl xl:mb-5 xl:text-[50px]/[59px]">
                                <CountsUp
                                    start={0}
                                    end={35}
                                    duration={2}
                                    delay={0}
                                />
                                +
                            </h3>
                            <p className="text-sm font-medium lg:text-base/[19px]">
                                Expert Bike Care Tips
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <OurStorySwiper />

            <div className="bg-gradient-to-l from-gray-100/10 via-gray-100 to-gray-100/10 pb-px">
                <div className="bg-white">
                    <div className="container">
                        <div className="grid gap-5 border-l border-gray-100 py-12 pl-2 md:grid-cols-2 md:gap-8 md:pl-0 lg:py-20 xl:gap-14">
                            <div className="md:pl-2">
                                <h2 className="text-lg font-bold uppercase lg:text-xl/6">
                                    about
                                    <span className="font-roboto font-medium italic">
                                        us
                                    </span>
                                </h2>
                            </div>
                            <div className="space-y-3 text-gray lg:space-y-5 lg:text-lg/[30px]">
                                <p>
                                    Since 1995, Cyclify Bike Store has been all
                                    about the joy of cycling. Our mission is to
                                    help you find the perfect bike, whether
                                    you’re new to riding or a seasoned pro. We
                                    offer a wide range of quality bicycles and
                                    gear, along with expert advice and friendly
                                    service.
                                </p>
                                <p>
                                    We’re passionate cyclists ourselves, and
                                    we’re here to support you on every ride.
                                    Join our community, and let’s explore the
                                    world on two wheels together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-l from-gray-100/10 via-gray-100 to-gray-100/10 pb-px">
                <div className="bg-white">
                    <div className="container">
                        <div className="grid gap-5 border-l border-gray-100 py-12 pl-2 md:grid-cols-2 md:gap-8 md:pl-0 lg:py-20 xl:gap-14">
                            <div className="md:pl-2">
                                <h2 className="text-lg font-bold uppercase lg:text-xl/6">
                                    Values &
                                    <span className="font-roboto font-medium italic">
                                        Mission
                                    </span>
                                </h2>
                            </div>
                            <div className="space-y-4 text-gray md:space-y-10 lg:space-y-14 lg:text-lg/[30px]">
                                <div>
                                    <h3 className="mb-2 text-lg/5 font-medium text-black lg:mb-3 lg:text-xl/6">
                                        Passion for Cycling
                                    </h3>
                                    <p>
                                        Cycling isn&apos;t just a hobby for us; it&apos;s
                                        a way of life. We&apos;re deeply passionate
                                        about all things cycling and strive to
                                        share that passion with everyone we
                                        encounter.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-lg/5 font-medium text-black lg:mb-3 lg:text-xl/6">
                                        Commitment to Quality
                                    </h3>
                                    <p>
                                        We believe in offering only the best
                                        products and services to our customers.
                                        From the gear we sell to the support we
                                        provide, quality is always our top
                                        priority.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-lg/5 font-medium text-black lg:mb-3 lg:text-xl/6">
                                        Environmental Responsibility
                                    </h3>
                                    <p>
                                        We understand the importance of
                                        environmental responsibility. We&apos;re
                                        dedicated to eco-friendly practices,
                                        from sustainable materials to minimal
                                        packaging.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-lg/5 font-medium text-black lg:mb-3 lg:text-xl/6">
                                        Community Engagement
                                    </h3>
                                    <p>
                                        Community engagement is at the heart of
                                        what we do. We believe in building
                                        strong connections with our customers
                                        and local communities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-l from-gray-100/10 via-gray-100 to-gray-100/10 pb-px">
                <div className="bg-white">
                    <div className="container">
                        <div className="grid gap-5 border-l border-gray-100 py-12 pl-2 md:grid-cols-2 md:gap-8 md:pl-0 lg:py-20 xl:gap-14">
                            <div className="md:pl-2">
                                <p className="text-lg font-bold uppercase lg:text-xl/6">
                                    Who
                                    <span className="font-roboto font-medium italic">
                                        we are?
                                    </span>
                                </p>
                            </div>
                            <div className="space-y-3 text-gray lg:space-y-5 lg:text-lg/[30px]">
                                <p>
                                    At Cyclify Bike Store, we’re passionate
                                    about more than just bicycles—we’re
                                    dedicated to the journey that comes with
                                    them. Whether you&apos;re an avid cyclist, a
                                    weekend warrior, or just getting started,
                                    our mission is to fuel your passion with the
                                    best gear, expert advice, and outstanding
                                    service.
                                </p>
                                <p>
                                    We believe that cycling is for everyone,
                                    which is why we offer a wide range of bikes
                                    and accessories to suit all ages, styles,
                                    and skill levels. From mountain trails to
                                    city streets, we’ve got you covered. Our
                                    team is made up of experienced riders who
                                    know what it takes to enhance your cycling
                                    experience, and we&apos;re here to support you
                                    every step of the way.
                                </p>
                                <p>
                                    At Cyclify Bike Store, it&apso;s not just about
                                    selling bikes—it&apos;s about creating a
                                    community of riders who share the love of
                                    the open road. Join us, and let&apos;s ride
                                    together.
                                </p>
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
                        "name": "About us",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/about-us",
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
                                "name": "About us",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                            }]
                        }
                    }`,
                }}
            />
          
        </>
    )
}
