import type { Metadata } from 'next'
import './globals.css'
import helper from '@/lib/helper'

export const metadata: Metadata = {
    title: 'Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        url: process.env.NEXT_PUBLIC_APP_URL + '/',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-aeonik bg-white text-base/[19px] font-normal text-black antialiased">
                {children}
            </body>
        </html>
    )
}
