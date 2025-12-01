import RegisterForm from '@/components/auth/register-form'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Register | Cyclify',
    description: 'Create a new account',
    openGraph: {
        ...helper.openGraphData,
        title: 'Register | Cyclify',
        description: 'Create a new account',
        url: process.env.NEXT_PUBLIC_APP_URL + '/register',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/register`,
    },
}

export default function RegisterPage() {
    return (
        <div className="grow bg-gray-100 py-14 lg:py-[100px]">
            <div className="container">
                <div className="mx-auto max-w-md space-y-8">
                    <div className="space-y-3 text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                            Join us{' '}
                            <span className="font-roboto font-medium italic">
                                Create account
                            </span>
                        </h1>
                        <p className="text-base text-gray md:text-xl">
                            Sign up to start your journey with us
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <RegisterForm />
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="font-medium text-teal underline underline-offset-4 transition hover:opacity-80"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

