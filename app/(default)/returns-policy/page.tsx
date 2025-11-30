import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Returns Ppolicy | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Returns Ppolicy | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/returns-policy',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/returns-policy`,
    },
}

export default function ReturnsPolicy() {
    return (
        <>
            <div className="relative mx-auto w-full bg-[#F6F6F6] px-4 py-12 text-center lg:py-20">
                <h1 className="text-3xl font-bold text-success md:text-4xl/[45px] lg:text-6xl/[65px] 2xl:text-[70px]/[84px]">
                    Returns&nbsp;
                    <span className="font-roboto font-medium italic text-teal">
                        Policy
                    </span>
                </h1>
            </div>

            <div className="prose mx-auto w-full max-w-[1142px] px-4 py-12 lg:prose-lg lg:py-20">
                <p className="font-medium">
                    At Cyclify Bike Store, your privacy is important to us. This
                    Privacy Policy outlines how we collect, use, and protect
                    your personal information when you visit our website or
                    engage with our services.
                </p>
                <ol type="1">
                    <li>
                        <h2>Information We Collect</h2>

                        <div>
                            <h5>Personal Information:</h5>
                            <p>
                                Cyclify Bike Store grants you a non-exclusive,
                                non-transferable, and revocable license to use
                                and modify the bicycles, accessories, and
                                related products (&quot;Products&quot;)
                                available at our store for your own personal or
                                commercial purposes. You may customize or adapt
                                the Products as needed for your use, but you may
                                not redistribute or resell them as standalone
                                items.
                            </p>
                        </div>
                        <div>
                            <h5>Non-Personal Information:</h5>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Quam est vel aperiam
                                consequuntur quibusdam tenetur veritatis
                                inventore aliquid alias impedit magnam nesciunt
                                molestias, vitae animi eligendi nisi quae
                                obcaecati! Beatae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h2>How We Use Your Information</h2>

                        <div>
                            <h5>To Process Transactions:</h5>
                            <p>
                                We use your personal information to process
                                orders, manage payments, and deliver products to
                                you.
                            </p>
                        </div>
                        <div>
                            <h5>To Improve Our Services:</h5>
                            <p>
                                Non-personal information helps us understand how
                                customers use our website, allowing us to
                                enhance our services and user experience.
                            </p>
                        </div>
                        <div>
                            <h5>To Communicate:</h5>
                            <p>
                                We may use your contact information to send you
                                updates on your order, promotional offers, and
                                other relevant information. You can opt out of
                                marketing communications at any time.
                            </p>
                        </div>
                        <div>
                            <h5>To Ensure Security:</h5>
                            <p>
                                We may use your contact information to send you
                                updates on your order, promotional offers, and
                                other relevant information. You can opt out of
                                marketing communications at any time.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h2>How We Protect Your Information</h2>
                        <p>
                            We implement various security measures to protect
                            your personal information. These include encryption,
                            secure servers, and other technologies designed to
                            keep your data safe.
                        </p>
                    </li>
                    <li>
                        <h2>Sharing Your Information</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your
                            personal information to outside parties, except as
                            necessary to process your transactions or comply
                            with legal requirements. This may include trusted
                            third parties who assist us in operating our website
                            and services.
                        </p>
                    </li>
                    <li>
                        <h2>Cookies</h2>
                        <p>
                            Our website may use cookies to enhance your browsing
                            experience. Cookies are small files that your
                            browser stores on your device, allowing us to
                            recognize you on future visits. You can adjust your
                            browser settings to refuse cookies, but this may
                            affect your experience on our website.
                        </p>
                    </li>
                    <li>
                        <h2>Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party sites.
                            We are not responsible for the privacy practices of
                            these sites, and we encourage you to review their
                            privacy policies before providing any personal
                            information.
                        </p>
                    </li>
                    <li>
                        <h2>Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete
                            your personal information at any time. If you wish
                            to exercise these rights or have any questions about
                            our Privacy Policy, please contact us at
                            contact@cyclifybikestore.
                        </p>
                    </li>
                    <li>
                        <h2>Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time
                            to reflect changes in our practices or for legal,
                            operational, or regulatory reasons. We encourage you
                            to review this policy periodically.
                        </p>
                    </li>
                    <li>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or concerns about our
                            Privacy Policy, please contact us at:
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
                        "name": "Returns Policy",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/returns-policy",
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
                                "name": "Returns Policy",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/returns-policy"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
