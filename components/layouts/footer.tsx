import IconFacebook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconTwitter from '@/components/icons/icon-twitter'
import IconWhatsapp from '@/components/icons/icon-whatsapp'
import IconYoutube from '@/components/icons/icon-youtube'
import { MapPin, MoveRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-auto bg-success">
            <div className="overflow-hidden rounded-b-[30px] bg-white xl:rounded-b-[80px]">
                <div className="bg-gradient-to-l from-bleach to-bleach-100 py-px">
                    <div className="bg-white">
                        <div className="bg-gradient-to-l from-bleach/10 to-bleach-100/10 py-10 lg:py-14">
                            <div className="container relative flex flex-col justify-between gap-10 lg:flex-row lg:gap-14">
                                <div>
                                    <Link
                                        href="/"
                                        className="mb-8 inline-flex sm:mb-[38px]"
                                    >
                                        <Image
                                            src="/images/footer-logo.svg"
                                            alt="Bike Store"
                                            className="w-28 shrink-0 lg:w-[140px]"
                                            width={140}
                                            height={28}
                                        />
                                    </Link>
                                    <div className="flex gap-3 text-white">
                                        <Link
                                            href="https://x.com/sbthemes_com"
                                            target='_blank'
                                            className="group grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#27D045] shadow-[0_0_25px_0_rgba(14,34,25,0.08)] transition hover:scale-110"
                                        >
                                            <IconWhatsapp className="size-[18px] shrink-0" />
                                        </Link>
                                        <Link
                                            href="https://x.com/sbthemes_com"
                                            target='_blank'
                                            className="group grid size-[30px] place-content-center overflow-hidden rounded-full border-2 border-white bg-[url('/images/insta-bg.png')] bg-cover bg-no-repeat object-cover shadow-[0_0_25px_0_rgba(14,34,25,0.08)] transition hover:scale-110"
                                        >
                                            <IconInstagram className="size-[15px] shrink-0" />
                                        </Link>
                                        <Link
                                            href="https://x.com/sbthemes_com"
                                            target='_blank'
                                            className="group grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#0866FE] shadow-[0_0_25px_0_rgba(14,34,25,0.08)] transition hover:scale-110"
                                        >
                                            <IconFacebook className="size-[18px] shrink-0" />
                                        </Link>
                                        <Link
                                            href="https://x.com/sbthemes_com"
                                            target='_blank'
                                            className="group grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#FD0000] shadow-[0_0_25px_0_rgba(14,34,25,0.08)] transition hover:scale-110"
                                        >
                                            <IconYoutube className="size-[18px] shrink-0" />
                                        </Link>
                                        <Link
                                            href="https://x.com/sbthemes_com"
                                            target='_blank'
                                            className="group grid size-[30px] place-content-center rounded-full border-2 border-white bg-[#1D9BF0] shadow-[0_0_25px_0_rgba(14,34,25,0.08)] transition hover:scale-110"
                                        >
                                            <IconTwitter className="size-[18px] shrink-0" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 gap-y-10 md:flex-row xl:gap-[100px]">
                                    <div className="w-full grow md:max-w-[338px]">
                                        <h3 className="mb-[30px] text-gray">
                                            Contact info
                                        </h3>
                                        <div className="space-y-5">
                                            <div className="flex gap-2.5">
                                                <Phone className="size-[18px] text-teal" />

                                                <Link
                                                    href="tel:+1 708-359-5968"
                                                    className="font-medium transition hover:opacity-80"
                                                >
                                                    +1 708-359-5968
                                                </Link>
                                            </div>
                                            <div className="flex gap-2.5">
                                                <MapPin className="size-[18px] text-teal" />
                                                <p className="font-medium">
                                                    82 Flinderation Road,
                                                    Bridgeview, IL 60455
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full grow md:max-w-[400px]">
                                        <h3 className="mb-[30px] leading-6 text-gray">
                                            EXTRA! Read All About It: New
                                            Arrivals, Observations and Events.
                                        </h3>
                                        <div className="flex flex-col items-start gap-2.5 gap-y-4 sm:flex-row sm:items-baseline">
                                            <input
                                                type="text"
                                                placeholder="Enter email address"
                                                className="w-full border-b border-gray bg-transparent pb-2.5 text-base/5 font-medium text-black placeholder:font-medium placeholder:text-gray focus:outline-none"
                                            />
                                            <button
                                                type="button"
                                                className="group inline-flex gap-5 whitespace-nowrap border-b border-black pb-1.5 text-base/5 font-medium text-black outline-none"
                                            >
                                                <span>Get on board</span>
                                                <MoveRight className="transition-all group-hover:-mr-1.5 group-hover:ml-1.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-2 gap-2.5 gap-y-10 py-10 font-medium sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:py-14">
                    <div>
                        <h2 className="mb-5 uppercase text-black">Bikes</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Mountain bike
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Road
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Gravel
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Trekking
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Women
                            </Link>
                        </div>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link href="#" className="footer-link"></Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">E-Bikes</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Mountain bike
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Trekking
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Gravel
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Transport
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">Kids</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                2-4 Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                3-5 Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                5-7 Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                7-9 Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                9-11 Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                10+ Years
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                E-bikes
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">Gear</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Helmets
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Clothing
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Gloves
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Shoes
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Backpacks
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Bags
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">Equipment</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Lights
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Bike locks
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Pedals & cleats
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Grips & bar ends
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Kickstands
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Saddle
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Mounts & adapters
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Spare parts
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">Pages</h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link href="/" className="footer-link">
                                Home
                            </Link>
                            <Link href="/about-us" className="footer-link">
                                About Us
                            </Link>
                            <Link
                                href="/cycle-collections"
                                className="footer-link"
                            >
                                Collections
                            </Link>
                            <Link href="/blogs" className="footer-link">
                                Blog
                            </Link>
                            <Link
                                href="/blogs/blog-details"
                                className="footer-link"
                            >
                                Blog details
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-5 uppercase text-black">
                            legal titles
                        </h2>
                        <div className="flex flex-col items-start gap-2 xl:gap-3.5">
                            <Link href="/contact-us" className="footer-link">
                                Contact Us
                            </Link>
                            <Link href="/warranty-policy" className="footer-link">
                                Warranty
                            </Link>
                            <Link href="/delivery-policy" className="footer-link">
                                Delivery
                            </Link>
                            <Link href="/returns-policy" className="footer-link">
                                Returns
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="footer-link"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                className="footer-link"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-l from-bleach to-bleach-100 pt-px">
                    <div className="bg-white py-5">
                        <div className="container mx-auto flex w-full flex-col items-center justify-between gap-3 text-sm/4 font-medium text-black lg:flex-row xl:max-w-[1500px] xl:px-[30px]">
                            <p className="order-2 text-center md:order-1 md:text-left">
                                © 2022-{new Date().getFullYear()}
                                &nbsp; Cyclify, Inc. All rights reserved.
                            </p>
                            <div className="order-1 flex gap-[30px] md:order-2">
                                <Link
                                    className="transition hover:underline"
                                    href="/privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    className="transition hover:underline"
                                    href="/terms-and-conditions"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 py-5 lg:py-10">
                <Image
                    src="/images/footer-logo2.svg"
                    alt="Bike Store"
                    className="mx-auto h-full w-60 lg:w-96 xl:w-[693px]"
                    width={693}
                    height={200}
                />
            </div>
        </footer>
    )
}
