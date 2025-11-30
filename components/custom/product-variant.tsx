'use client'
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductVariantCards from '@/components/custom/product-variant-card'
import { IVariant } from '@/types/product'

gsap.registerPlugin(ScrollTrigger)

const variants: IVariant[] = [
    {
        id: 1,
        panelId: 'panel-1',
        name: 'Velocity Roadster',
        cycleImage: '/images/velocity-roadster.png',
        alt: 'Velocity Roadster',
        textImage: '/images/velocity-text.png',
        color: 'bg-gradient-to-t from-purple-100 to-purple-200',
    },
    {
        id: 2,
        panelId: 'panel-2',
        name: 'RideSwift AGO T Electric Bike',
        cycleImage: '/images/rideswift.png',
        alt: 'RideSwift AGO T Electric Bike',
        textImage: '/images/rideswift-text.png',
        color: 'bg-gradient-to-t from-success-100 to-success-200',
    },
    {
        id: 3,
        panelId: 'panel-3',
        name: 'Rugged CGO009 Adventure Bike',
        cycleImage: '/images/rugged.png',
        alt: 'Rugged CGO009 Adventure Bike',
        textImage: '/images/rugged-text.png',
        color: 'bg-gradient-to-t from-sky-blue to-gray-200',
    },
    {
        id: 4,
        panelId: 'panel-4',
        name: 'Velocity Roadster',
        cycleImage: '/images/velocity-roadster.png',
        alt: 'Velocity Roadster',
        textImage: '/images/velocity-text.png',
        color: 'bg-gradient-to-t from-purple-100 to-purple-200',
    },
    {
        id: 5,
        panelId: 'panel-5',
        name: 'RideSwift AGO T Electric Bike',
        cycleImage: '/images/rideswift.png',
        alt: 'RideSwift AGO T Electric Bike',
        textImage: '/images/rideswift-text.png',
        color: 'bg-gradient-to-t from-success-100 to-success-200',
    },
]

export default function ProductVariant() {
    const homeWrapper = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const mm = gsap.matchMedia() // Media query handling via GSAP

        const HomeCtx = gsap.context(() => {
            const panels = gsap.utils.toArray('#panels-container .panel')
            const panelsContainer = document.querySelector(
                '#panels-container',
            ) as HTMLElement

            mm.add('(min-width: 1024px)', () => {
                // Only runs if the screen width is at least 1024px
                gsap.to(panels, {
                    xPercent: -50 * (panels.length - 1),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '#panels-container',
                        pin: true,
                        start: 'top top',
                        scrub: 0.5,
                        snap: 1 / (panels?.length - 1),
                        end: () =>
                            '+=' +
                            (
                                Number(panelsContainer?.offsetWidth) -
                                innerWidth
                            ).toString(), // Type assertion for offsetWidth
                    },
                })
            })
        }, homeWrapper)

        return () => {
            HomeCtx.revert() // Clean up context
            mm.revert() // Clean up matchMedia to avoid memory leaks
        }
    }, [])
    
    return (
        <div id="panels" className="overflow-hidden" ref={homeWrapper}>
            <div
                id="panels-container"
                className="grid gap-2.5 px-4 sm:grid-cols-2 lg:w-[166.65%] lg:grid-cols-5"
            >
                {variants.map((variant) => (
                    <ProductVariantCards key={variant.id} variants={variant} />
                ))}
            </div>
        </div>
    )
}
