import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Order success | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Order success | cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/order-success',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/order-success`,
    },
}

export default function OrderSuccess() {
    return (
        <>
           <div
            className="flex min-h-[calc(100vh-61px)] items-center justify-center px-4 pt-12 lg:py-20 lg:min-h-[calc(100vh-90px)]"
        >
            <div
                className="w-full max-w-xl text-center text-gray"
            >
                <div className="pb-5">
                    <Image
                        alt="Order success"
                        src="/images/order-success.png"
                        width={195}
                        height={155}
                        className="mx-auto"
                    />
                </div>
                <div className="mt-5 space-y-2.5 font-medium">
                    <h2 className="font-medium text-black text-2xl">Hey Joseph,</h2> 
                    <p className="text-lg/5">
                        Thank you ! Your order is completed !
                    </p>
                    <p className="text-sm">
                        You will receive an order confirmation email with
                        details of your order.
                    </p>
                    <p
                        className="!mt-5 text-base/5 text-black underline underline-offset-2"
                    >
                        Your Order ID: <span className="font-bold">PC32565</span>
                    </p>
                </div>
            </div>
        </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Order success",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/order-success",
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
                                "name": "Order success",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/order-success"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
