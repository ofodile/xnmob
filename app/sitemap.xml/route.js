export const revalidate = 60;

export async function GET() {
  const baseUrl = "https://bangfab.vercel.app";
  const apiUrl =
    "https://www.eporner.com/api/v2/video/search/?query=All&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json";

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    const sanitizeUrl = (text) =>
      encodeURIComponent(text).replace(/%20/g, "-");

    const staticRoutes = [
      "teen", "blowjob", "lesbian", "anal", "threesome", "footjob",
      "ebony", "amateur", "indian", "bmw", "public", "fat", "cumshot",
      "fingering", "toys", "family", "cowgirl", "hardcore", "handjob",
      "homemade", "yoga", "squirt", "scissoring", "school", "redhead", "masturbation"
    ];

    const allUrls = [
      {
        loc: baseUrl,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 1.0,
      },
      ...staticRoutes.map((slug) => ({
        loc: `${baseUrl}/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.5,
      })),
      ...data.videos
        .filter((v) => v.length_sec <= 1800)
        .map((v) => ({
          loc: `${baseUrl}/${v.id}-${sanitizeUrl(v.title)}`,
          lastmod: new Date().toISOString(),
          changefreq: "daily",
          priority: 0.5,
        })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response("", { status: 500 });
  }
}
