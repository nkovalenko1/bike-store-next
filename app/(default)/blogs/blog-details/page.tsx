import { BlogListings } from '@/blog-json/blog'
import BlogListingCard from '@/components/custom/blog-listing-card'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog details | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog details | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog-details',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog-details`,
    },
}

export default function BlogDetails() {
    const blogItems = []
    for (const blog of BlogListings) {
        blogItems.push(`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "name": "${blog?.title}",
            "image": "${process.env.NEXT_PUBLIC_APP_URL}${blog?.image}",
            "description": "${blog?.description}",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}/blogs/blog-details",
            "datePublished": "${blog?.date}",
            "author": ${helper.getOrganizationJsonString()},
            "publisher": ${helper.getOrganizationJsonString()},
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${process.env.NEXT_PUBLIC_APP_URL}/blogs/blog-details"
            }
        }`)
    }
    return (
        <>
            <div className="container py-12 lg:max-w-[1142px] lg:py-20">
                <div className="mb-10">
                    <p className="mb-1 text-xs lg:mb-2 lg:text-sm">
                        June 2, 2021
                    </p>
                    <h1 className="font-otterco-display mb-2 text-xl font-semibold uppercase text-black sm:text-2xl lg:mb-4 lg:text-4xl">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting.
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm lg:text-base">
                        <p className="line-clamp-2 break-words">
                            Hero Cycles Team
                        </p>
                        <span className="size-1 shrink-0 rounded-full bg-success"></span>
                        <p>3 mins read</p>
                    </div>
                </div>
                <div className="h-80 overflow-hidden rounded-xl sm:h-96 lg:h-[480px]">
                    <Image
                        src="/images/cycle-video-img1.jpg"
                        alt="Blog-image"
                        width={900}
                        height={350}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="prose mt-8 w-full max-w-full lg:prose-lg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum corporis obcaecati odit quas labore sequi
                        officia&nbsp;
                        <Link href="/">www.estatelis.com</Link>
                        &nbsp; fuga porro doloribus expedita optio repellendus
                        modi dolorum aspernatur aliquid ad, neque sed tenetur.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum, you need to be
                        sure there isn&apos;t anything embarrassing hidden in
                        the middle of text. All the Lorem Ipsum generators on
                        the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the
                        Internet.
                    </p>
                    <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                    </p>
                    <div>
                        <h2>The standard Lorem Ipsum passage.</h2>
                        <p>
                            It uses a dictionary of over 200 Latin words,
                            combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc.
                        </p>
                        <ul>
                            <li>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                            </li>
                            <li>
                                But I must explain to you how all this mistaken.
                            </li>
                            <li>
                                On the other hand, we denounce with righteous
                                indignation.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="/images/velocity-road.jpg"
                            alt="Blog-image"
                            width={545}
                            height={320}
                        />
                    </div>
                    <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum, you need to be
                        sure there isn&apos;t anything embarrassing hidden in
                        the middle of text. All the Lorem Ipsum generators on
                        the Internet tend.
                    </p>
                    <div>
                        <h3>Where can I get some?</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                        </p>
                        <ol type="1">
                            <li>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium.
                            </li>
                            <li>
                                But I must explain to you how all this mistaken.
                            </li>
                            <li>
                                On the other hand, we denounce with righteous
                                indignation.
                            </li>
                        </ol>
                    </div>
                    <blockquote>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </blockquote>
                    <div>
                        <h4>The standard Lorem Ipsum passage.</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eos, officiis. Consequuntur dicta expedita
                            asperiores ea, velit odit placeat eum sequi
                            temporibus quam. Fuga porro enim illum debitis
                            quibusdam, voluptas quisquam?
                        </p>
                    </div>
                    <div>
                        <h5>Nunc et sem vel diam dignissim</h5>
                        <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment,
                            so blinded by desire, that they cannot foresee the
                            pain and trouble that are bound to ensue; and equal
                            blame belongs to those who fail in their duty
                            through weakness of will, which is the same as
                            saying through shrinking from toil and pain.
                        </p>
                    </div>
                    <div>
                        <h6>Why do we use it?</h6>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source
                        </p>
                    </div>
                </div>
            </div>

            <div className="container pb-12 lg:pb-20">
                <h2 className="text-2xl font-bold">Similar blogs</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                    {BlogListings?.slice(0, 4)?.map((blogListing) => (
                        <BlogListingCard
                            key={blogListing.id}
                            data={blogListing}
                        />
                    ))}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${process.env.NEXT_PUBLIC_APP_URL}/blog/blog-details"
                        },
                        "headline": "Lorem Ipsum is simply dummy text of the printing and
                        typesetting.",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/velocity-road.jpg",
                        "author": ${helper.getOrganizationJsonString()},
                        "publisher": ${helper.getOrganizationJsonString()},
                        "datePublished": "June 2, 2021",
                        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum corporis obcaecati odit quas labore sequi
                        officia..",
                        "articleBody": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                        }`,
                }}
            />
        </>
    )
}
