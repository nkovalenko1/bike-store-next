import { BlogListings as blogs } from '@/blog-json/blog'
// import { IBlogListing } from '@/types/product'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || ''
const lastMod = new Date().toISOString()

async function generateSiteMap() {
    try {
        const urls = blogs?.map(() => {
            return `
            <url>
                <loc>${baseUrl}/blogs/blog-details</loc>
                <lastmod>${lastMod}</lastmod>
             </url>`
        })

        return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls?.join('')}
        </urlset>`
    } catch (error) {
        console.log(error)
    }
}

export async function GET() {
    const body = await generateSiteMap()

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    })
}
