import { BlogListings } from '@/blog-json/blog'
import BlogListingCard from '@/components/custom/blog-listing-card'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blogs | Cyclify',
    description: 'Your journey to the genuine begins here.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blogs | Cyclify',
        description: 'Your journey to the genuine begins here.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blogs',
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blogs`,
    },
}

export default function Blogs() {
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
            <div className="relative mx-auto w-full bg-[#F6F6F6] px-4 py-12 text-center lg:py-20">
                <h1 className="mb-3 text-3xl font-bold text-success md:text-4xl/[45px] lg:text-6xl/[65px] 2xl:text-[70px]/[84px]">
                    Blog&nbsp;
                    <span className="font-roboto font-medium italic text-teal">
                        List
                    </span>
                </h1>
                <p className="mx-auto max-w-2xl text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="py-12 lg:py-20">
                <div className="container">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                    {BlogListings?.map((blogListing) => (
                            <BlogListingCard    
                                key={blogListing.id}
                                data={blogListing}
                            />
                        ))}
                        
                    </div>
                    <Pagination className="mt-10 md:mt-14">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">10</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Blogs",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}/blogs",
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
                                "name": "Blogs",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/blogs"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
