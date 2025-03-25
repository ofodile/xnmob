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

export default async function Video({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;
  const id = slug.split("-")[0];

  const data = await fetchVideoData(id);

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

        
      </div>

      <div className="section-two">Ad Section</div>
      <div className="section-two">Ad Section</div>
    </div>
  );
}