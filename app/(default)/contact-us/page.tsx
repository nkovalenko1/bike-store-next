import IconFacebook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconTwitter from '@/components/icons/icon-twitter'
import IconWhatsapp from '@/components/icons/icon-whatsapp'
import IconYoutube from '@/components/icons/icon-youtube'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Contact us | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Contact us | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/contact-us',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact-us`,
    },
}

export default function ContactUs() {
    return (
        <>
            <div className="grow bg-gray-100 py-14 lg:py-[100px]">
                <div className="container">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                            Got questions?{' '}
                            <span className="font-roboto font-medium italic">
                                Let&apos;s chat!
                            </span>
                        </h1>
                        <p className="ext-base text-gray md:text-xl">
                            Reach out anytime, we&apos;re here to help
                        </p>
                    </div>
                </div>
                <div className="mt-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent lg:mt-14"></div>
                <div className="container">
                    <div className="md:flex">
                        <div className="grow divide-y divide-black/10 border-black/10 font-medium md:border-l">
                            <div className="flex items-start gap-5 px-2.5 py-7">
                                <div className="min-w-6 text-teal">01</div>
                                <div className="grow space-y-5">
                                    <div className="font-roboto italic">
                                        What&apos;s your name?
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Jhonen Doe*"
                                        className="p-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-5 px-2.5 py-7">
                                <div className="min-w-6 text-teal">02</div>
                                <div className="grow space-y-5">
                                    <div className="font-roboto italic">
                                        What&apos;s your mobile number?
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="+1 661-291-7139"
                                        className="p-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-5 px-2.5 py-7">
                                <div className="min-w-6 text-teal">03</div>
                                <div className="grow space-y-5">
                                    <div className="font-roboto italic">
                                        What&apos;s your email?
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="info@jhonendoe*"
                                        className="p-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-5 px-2.5 py-7">
                                <div className="min-w-6 text-teal">04</div>
                                <div className="grow space-y-5">
                                    <div className="font-roboto italic">
                                        Subject
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Enquiry about new dealership...*"
                                        className="p-0"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-5 px-2.5 py-7">
                                <div className="min-w-6 text-teal">05</div>
                                <div className="grow space-y-5">
                                    <div className="font-roboto italic">
                                        Your message
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Hello, can you help me with...*"
                                        className="p-0"
                                    />
                                </div>
                            </div>
                            <div className="px-14 py-7">
                                <Button type="button" className="uppercase">
                                    submit
                                </Button>
                            </div>
                        </div>
                        <div className="shrink-0 border-black/10 px-2.5 font-medium md:w-[330px] md:border-x">
                            <div className="space-y-2.5 py-5 md:py-7">
                                <div className="font-roboto italic text-gray">
                                    Phone number
                                </div>
                                <Link
                                    href="tel:+1708-359-5968"
                                    className="inline-block transition hover:opacity-70"
                                >
                                    +1 708-359-5968
                                </Link>
                            </div>
                            <div className="space-y-2.5 py-5 md:py-7">
                                <div className="font-roboto italic text-gray">
                                    Address
                                </div>
                                <div>
                                    82 Flinderation Road, Bridgeview, IL 60455
                                </div>
                            </div>
                            <div className="space-y-2.5 py-5 md:py-7">
                                <div className="font-roboto italic text-gray">
                                    Email address
                                </div>
                                <Link
                                    href="mailto:contact@cyclifybikestore.com"
                                    className="inline-block transition hover:opacity-70"
                                >
                                    contact@cyclifybikestore.com
                                </Link>
                            </div>
                            <div className="space-y-2.5 py-5 md:py-7">
                                <div className="font-roboto italic text-gray">
                                    Social media
                                </div>
                                <div className="flex gap-5 text-white">
                                    <Link
                                        href="https://x.com/sbthemes_com"
                                        target='_blank'
                                        className="grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#27D045] transition hover:scale-110"
                                    >
                                        <IconWhatsapp className="size-[18px] shrink-0" />
                                    </Link>
                                    <Link
                                        href="https://x.com/sbthemes_com"
                                        target='_blank'
                                        className="grid size-[30px] place-content-center overflow-hidden rounded-full border-2 border-white bg-[url('/images/insta-bg.png')] bg-cover bg-no-repeat object-cover transition hover:scale-110"
                                    >
                                        <IconInstagram className="size-[15px] shrink-0" />
                                    </Link>
                                    <Link
                                        href="https://x.com/sbthemes_com"
                                        target='_blank'
                                        className="grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#0866FE] transition hover:scale-110"
                                    >
                                        <IconFacebook className="size-[18px] shrink-0" />
                                    </Link>
                                    <Link
                                        href="https://x.com/sbthemes_com"
                                        target='_blank'
                                        className="grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#FD0000] transition hover:scale-110"
                                    >
                                        <IconYoutube className="size-[18px] shrink-0" />
                                    </Link>
                                    <Link
                                        href="https://x.com/sbthemes_com"
                                        target='_blank'
                                        className="grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#1D9BF0] transition hover:scale-110"
                                    >
                                        <IconTwitter className="size-[18px] shrink-0" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                <div className="mt-10 h-80 lg:mt-14 lg:h-[500px]">
                    <div className="container h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884499.7126042491!2d-98.67928312161247!3d30.00594527332778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a014ac8dcf%3A0xcb6f5722a795d039!2sTexas%20Capitol!5e0!3m2!1sen!2sin!4v1725371022131!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Contact us",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/contact-us",
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
                                "name": "Contact us",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/contact-us"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
