import Link from "next/link";
import "./css/category.css"

export default async function Home() {
  const url = "https://www.eporner.com/api/v2/video/search/?query=All&per_page=30&page=1&thumbsize=big&order=top-monthly&gay=0&lq=1&format=json";

  let videos = []; 

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    videos = json.videos.filter(video => video.length_sec <= 1800);
    console.log(videos);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      {videos.length > 0 ? (
        <div className="container">
          {videos.map((video) => (
            <Link key={video.id} href={`/${video.id}-${video.title.replace(/ /g, '-')}`}>
              <div className="img-container">
                <img 
                 src={video.default_thumb.src}  
                 alt={video.title} 
                 className="thumbnil"
               />
               <p className="video-time">{video.length_min} min</p>
              </div>
              
              {video.title.length > 60 ? (
                <h2 className="title">{video.title.substring(0, 60) + "..."}</h2>
              ) : (
                <h2 className="title">{video.title}</h2>
              )}
              
              <p className="tag">{video.keywords.split(",")[2]}</p>
            </Link>
          ))} 
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </>
  );
}
