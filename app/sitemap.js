export const revalidate = 30;

export default async function sitemap() {
  const baseUrl = "https://bangfab.vercel.app"; // Update with your domain
  const apiUrl =
    "https://www.eporner.com/api/v2/video/search/?query=All&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json";

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    // Sanitize URL function
    const sanitizeUrl = (text) =>
      encodeURIComponent(text).replace(/%20/g, "-"); // Replace spaces with hyphens

    // Generate sitemap entries
    const videoUrls = data.videos
      .filter((video) => video.length_sec <= 1800)
      .map((video) => ({
        url: `${baseUrl}/${video.id}-${sanitizeUrl(video.title)}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 0.5,
      }));

    return [
      { url: baseUrl, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 1.0 },
      { url: `${baseUrl}/teen`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.5 },
      { url: `${baseUrl}/blowjob`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.5 },
      { url: `${baseUrl}/lesbian`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.5 },
      { url: `${baseUrl}/celebrities`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.5 },
      { url: `${baseUrl}/masturbation`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.5 },
      ...videoUrls,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
