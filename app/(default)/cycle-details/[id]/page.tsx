import ProductDetail from '@/components/products/product-detail'
import FeedbackSwiper from '@/components/custom/feedback-swiper'
import RideBanner from '@/components/custom/ridebanner'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    return {
        title: `Product ${id} | Cyclify`,
        description: 'Your journey to the genuine begins here.',
        openGraph: {
            ...helper.openGraphData,
            title: `Product ${id} | Cyclify`,
            description: 'Your journey to the genuine begins here.',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/cycle-details/${id}`,
            type: 'website',
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_APP_URL}/cycle-details/${id}`,
        },
    }
}

export default async function CycleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <>
            <ProductDetail />

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

            <FeedbackSwiper />
            <RideBanner />
        </>
    )
}

