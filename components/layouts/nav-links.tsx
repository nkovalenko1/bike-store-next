import NavLink from '@/components/ui/nav-link'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Headphones, LogOut } from 'lucide-react'

export default function NavLinks() {
    return (
        <div className="flex h-screen w-80 flex-col overflow-y-auto bg-white px-4 pb-10 duration-300 lg:static lg:h-auto lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:overflow-x-auto lg:overflow-y-visible lg:bg-transparent lg:p-0">
            <div className="sticky top-0 -mx-4 flex items-center justify-between border-b border-gray bg-white px-4 lg:hidden">
                <Link
                    href="/"
                    className="my-5 inline-block shrink-0 transition hover:opacity-80"
                >
                    <Image
                        src="/images/logo.svg"
                        alt="Bike Store"
                        className="w-28 shrink-0 lg:w-[140px]"
                        width={140}
                        height={28}
                    />
                </Link>
            </div>

            <ul className="flex grow flex-col divide-y divide-gray-100 uppercase lg:w-1/2 lg:flex-row lg:justify-center lg:gap-4 lg:divide-y-0 xl:gap-[30px]">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/women-cycle">women</NavLink>
                </li>
                <li>
                    <NavLink href="/kids-cycle">Kids</NavLink>
                </li>
                <li>
                    <NavLink href="/cycle-collections">collections</NavLink>
                </li>
                <li>
                    <NavLink href="/about-us">About us</NavLink>
                </li>
                <li>
                    <NavLink href="/blogs" targetPath='/blog'>Blog</NavLink>
                </li>
                <li className="lg:hidden">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="py-2 text-sm uppercase text-black hover:text-gray">
                                User profile
                            </AccordionTrigger>
                            <AccordionContent className="border-t border-gray-100 ml-3 p-0 text-xs text-black">
                                <div className="divide-y divide-gray-100 font-medium">
                                    <Link
                                        href="/contact-us"
                                        className="flex w-full items-center gap-1.5 px-2 py-1.5 hover:text-gray transition" 
                                    >
                                        <Headphones className="size-3.5 shrink-0" />
                                        Help Center
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex w-full items-center gap-1.5 px-2 py-1.5 hover:text-gray transition"
                                    >
                                        <LogOut className="size-3.5 shrink-0" />
                                        Sign out
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </li>
            </ul>
        </div>
    )
}
