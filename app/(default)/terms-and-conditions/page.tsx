import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Terms & Conditions | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Terms & Conditions | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/terms-and-conditions',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terms-and-conditions`,
    },
}

export default function TermsAndConditions() {
    return (
        <>
            <div className="relative mx-auto w-full bg-[#F6F6F6] py-12 text-center lg:py-20 px-4">
                <h1 className="text-3xl font-bold text-success md:text-4xl/[45px] lg:text-6xl/[65px] 2xl:text-[70px]/[84px]">
                    Terms and&nbsp;
                    <span className="font-roboto font-medium italic text-teal">
                        Conditions
                    </span>
                </h1>
            </div>

            <div className="prose mx-auto w-full max-w-[1142px] px-4 py-12 lg:prose-lg lg:py-20">
                <p className="font-medium">
                    Welcome to Cyclify Bike Store! These Terms and Conditions
                    govern your use of our website and services. By accessing or
                    using our website, you agree to comply with and be bound by
                    these terms.
                </p>
                <ol type="1">
                    <li>
                        <h2>Acceptance of Terms</h2>

                        <p>
                            By using our website or purchasing our products, you
                            agree to these Terms and Conditions. If you do not
                            agree with any part of these terms, please do not
                            use our website or services.
                        </p>
                    </li>
                    <li>
                        <h2>Products and Services</h2>

                        <div>
                            <h5>Product Descriptions:</h5>
                            <p>
                                We strive to provide accurate descriptions of
                                our products. However, we do not warrant that
                                product descriptions or other content on our
                                website are completely accurate, complete,
                                reliable, current, or error-free.
                            </p>
                        </div>
                        <div>
                            <h5>Pricing:</h5>
                            <p>
                                Prices for our products are subject to change
                                without notice. We reserve the right to modify
                                or discontinue products at any time.
                            </p>
                        </div>
                        <div>
                            <h5>Availability:</h5>
                            <p>
                                All products are subject to availability, and we
                                reserve the right to limit the quantity of
                                products we supply, supply only part of an
                                order, or divide orders.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h2>Orders and Payments</h2>
                        <div>
                            <h5>Order Acceptance:</h5>
                            <p>
                                All orders are subject to acceptance by Cyclify
                                Bike Store. We reserve the right to refuse or
                                cancel any order for any reason, including
                                errors in product information or pricing, or if
                                we suspect fraudulent activity.
                            </p>
                        </div>
                        <div>
                            <h5>Payment:</h5>
                            <p>
                                Payment must be made at the time of purchase
                                using the payment methods provided on our
                                website. You agree to provide accurate and
                                complete payment information.
                            </p>
                        </div>
                        <div>
                            <h5>Shipping:</h5>
                            <p>
                                Shipping costs and estimated delivery times will
                                be provided at checkout. Delivery times are
                                estimates and may vary.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h2>Returns and Refunds</h2>
                        <div>
                            <h5>Return Policy:</h5>
                            <p>
                                We accept returns of unused and undamaged
                                products within [insert return period, e.g., 30
                                days] of purchase. Please review our Return
                                Policy for detailed instructions on how to
                                return items.
                            </p>
                        </div>
                        <div>
                            <h5>Refunds:</h5>
                            <p>
                                Refunds will be processed once the returned item
                                has been received and inspected. Refunds will be
                                issued to the original payment method.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h2>User Conduct</h2>
                        <p>
                            You agree not to use our website for any unlawful or
                            prohibited activities, including but not limited to:
                        </p>
                        <ul className="text-black">
                            <li>Transmitting harmful or malicious software.</li>
                            <li>
                                Engaging in activities that interfere with or
                                disrupt the website&apos;s functionality.
                            </li>
                            <li>
                                Impersonating any person or entity or
                                misrepresenting your affiliation with any person
                                or entity.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>Intellectual Property</h2>
                        <p>
                            All content on our website, including text, images,
                            logos, and designs, is the property of Cyclify Bike
                            Store or its content suppliers and is protected by
                            copyright and other intellectual property laws. You
                            may not use, reproduce, distribute, or create
                            derivative works of our content without our express
                            written permission.
                        </p>
                    </li>
                    <li>
                        <h2>Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Cyclify Bike
                            Store shall not be liable for any direct, indirect,
                            incidental, special, or consequential damages
                            resulting from your use or inability to use our
                            website or products. This includes damages for
                            errors, omissions, interruptions, defects, delays,
                            or computer viruses.
                        </p>
                    </li>
                    <li>
                        <h2>Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless Cyclify
                            Bike Store and its affiliates, officers, employees,
                            and agents from any claims, liabilities, damages, or
                            expenses (including attorney&apos;s fees) arising from
                            your use of our website or breach of these Terms and
                            Conditions.
                        </p>
                    </li>
                    <li>
                        <h2>Governing Law</h2>
                        <p>
                            These Terms and Conditions are governed by and
                            construed in accordance with the laws of [Insert
                            Jurisdiction], without regard to its conflict of law
                            principles. Any disputes arising from these terms
                            will be subject to the exclusive jurisdiction of the
                            courts in [Insert Jurisdiction].
                        </p>
                    </li>
                    <li>
                        <h2>Changes to Terms</h2>
                        <p>
                            We may update these Terms and Conditions from time
                            to time. Any changes will be posted on this page,
                            and the effective date will be updated. Your
                            continued use of our website after any changes
                            constitutes your acceptance of the new terms.
                        </p>
                    </li>
                    <li>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these
                            Terms and Conditions, please contact us at:
                        </p>
                    </li>
                </ol>
                <div className="my-5 lg:my-10">
                    <p className="mb-2.5 !leading-5 lg:mb-5">
                        Email address:&nbsp;
                        <span className="font-medium text-black">
                            contact@cyclifybikestore.com
                        </span>
                    </p>
                    <p className="mb-2.5 !leading-5 lg:mb-5">
                        Contact number:&nbsp;
                        <span className="font-medium text-black">
                            +1 713-615-2790
                        </span>
                    </p>
                    <p className="mb-2.5 !leading-5 lg:mb-5">
                        Address:&nbsp;
                        <span className="font-medium text-black">
                            1998 Kelly Street Charlotte, NC 28202
                        </span>
                    </p>
                </div>
                <p>
                    Thank you for your continued support, and we hope our
                    website remains a valuable resource for you.
                </p>
                <p className="!mb-0">Sincerely,</p>
                <p className="font-medium text-black">
                    The Cyclify Bike Store Team
                </p>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Terms & Conditions",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/trems-and-conditions",
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
                                "name": "Terms & Conditions",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/trems-and-conditions"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
