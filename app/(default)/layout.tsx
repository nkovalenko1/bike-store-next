'use client'

import { ScreenLoading } from "@/components/custom/screen-loading"
import Footer from "@/components/layouts/footer"
import Header from "@/components/layouts/header"
import { useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react"

export default function DefaultLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 2000)
    }, [])

    if (isLoad) {
        return <ScreenLoading />
    }


    return (
        <SessionProvider>
            <div className="flex min-h-screen flex-col">
                <Header />
                {children}
                <Footer />
            </div>
        </SessionProvider>
    )
}
