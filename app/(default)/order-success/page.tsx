import OrderSuccessContent from '@/components/orders/order-success-content'
import helper from '@/lib/helper'
import { Metadata } from 'next'

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
            <OrderSuccessContent />

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
