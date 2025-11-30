const URL = process.env.NEXT_PUBLIC_APP_URL || ''
const lastMod = new Date().toISOString()

function generateSiteMap(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${URL}</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/cycle-details</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
     <url>
        <loc>${URL}/cycle-collections</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/about-us</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/privacy-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/terms-and-conditions</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/delivery-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/returns-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/warranty-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/women-cycle</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/kids-cycle</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/cart</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/order-success</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    </urlset>`
}

export function GET(): Response {
    const body = generateSiteMap()

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    })
}
