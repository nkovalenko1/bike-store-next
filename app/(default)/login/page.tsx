import LoginForm from '@/components/auth/login-form'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Login | Cyclify',
    description: 'Sign in to your account',
    openGraph: {
        ...helper.openGraphData,
        title: 'Login | Cyclify',
        description: 'Sign in to your account',
        url: process.env.NEXT_PUBLIC_APP_URL + '/login',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/login`,
    },
}

export default function LoginPage() {
    return (
        <div className="grow bg-gray-100 py-14 lg:py-[100px]">
            <div className="container">
                <div className="mx-auto max-w-md space-y-8">
                    <div className="space-y-3 text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                            Welcome back{' '}
                            <span className="font-roboto font-medium italic">
                                Sign in
                            </span>
                        </h1>
                        <p className="text-base text-gray md:text-xl">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <LoginForm />
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/register"
                                className="font-medium text-teal underline underline-offset-4 transition hover:opacity-80"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

