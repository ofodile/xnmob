import Link from "next/link";
import "../css/RelatedPost.css";

export default async function RelatedPost() {
  
  const texts = [
  "Teen",
  "Blowjob",
  "Lesbian",
  "Masturbation",
  "Ebony"
];

// Function to get a random text
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}


  const url =  `https://www.eporner.com/api/v2/video/search/?query=${getRandomText()}&per_page=500&page=1&thumbsize=big&order=top-monthly&gay=0&lq=1&format=json`;

  let videos = [];

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    videos = json.videos.filter((video) => video.length_sec <= 1800);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <h2 className="related-h2">Related videos</h2>
      {videos.length > 0 ? (
        <div className="related-container">
          {videos.slice(0, 6).map((video) => (
            <Link
              key={video.id}
              href={`/${video.id}-${video.title.replace(/ /g, "-")}`}
            >
              <div className="related-img-container">
                <img
                  src={video.default_thumb.src}
                  alt={video.title}
                  className="related-thumbnil"
                />
                <p className="related-video-time">{video.length_min} min</p>
              </div>

              {video.title.length > 60 ? (
                <h2 className="related-title">
                  {video.title.substring(0, 60) + "..."}
                </h2>
              ) : (
                <h2 className="related-title">{video.title}</h2>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </>
  );
}
