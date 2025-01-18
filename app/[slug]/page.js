import "../css/video.css";
import Link from "next/link";

async function fetchVideoData(id) {
  const url = `https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=medium&format=json`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
}

async function fetchRelatedVideos() {
  const relatedUrl =
    "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json";
  try {
    const res = await fetch(relatedUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const jsonData = await res.json();
    return jsonData.videos || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching related videos:", error);
    return [];
  }
}

export default async function Video({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;
  const id = slug.split("-")[0];

  const data = await fetchVideoData(id);
  const relatedData = await fetchRelatedVideos();

  return (
    <div className="video-container">
      <div className="section-one">
        <h1 className="video-title">{data?.title || "Loading..."}</h1>
        {data?.embed ? (
          <iframe
            src={data.embed}
            title={data.title || "Video"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Video not available.</p>
        )}

        <div className="related-container">
          <h3>Related Videos</h3>
          {relatedData.length > 0 ? (
            relatedData.map((video) => (
              <Link
                key={video.id}
                href={`/${video.id}-${video.title.replace(/ /g, "-")}`}
              >
                <img
                  src={video.default_thumb.src}
                  alt={video.title}
                  className="related-thumbnail"
                />
                <h2 className="title">
                  {video.title.length > 60
                    ? video.title.substring(0, 60) + "..."
                    : video.title}
                </h2>
              </Link>
            ))
          ) : (
            <p>No related videos found.</p>
          )}
        </div>
      </div>

      <div className="section-two">Ad Section</div>
    </div>
  );
}