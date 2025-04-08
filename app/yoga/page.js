import Link from "next/link";
import "../css/category.css";
import Adcode1 from '../components/Adcode1'
import Adcode2 from "../components/Adcode2";

export default async function Yoga({ searchParams }) {
  const url =
    "https://www.eporner.com/api/v2/video/search/?query=yoga&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json";

  let videos = [];
  
  
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return await res.json();
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}

try {
  const json = await fetchWithRetry(url);
  videos = json.videos.filter((video) => video.length_sec <= 1800);
} catch (error) {
  console.error("Error fetching data:", error);
}

  // **Await searchParams to properly access the query parameter**
  const params = await searchParams; // Awaiting searchParams
  const currentPage = parseInt(params?.page || "1", 10);

  const itemsPerPage = 30;
  const totalItems = videos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="home-ad">
        <div className="home-ad-1">
          <Adcode1 />
        </div>
        <div className="home-ad-2">
          <Adcode2 />
        </div>
      </div>
      <h3 className="category-h3">Yoga Category</h3>
      {paginatedVideos.length > 0 ? (
        <div className="container">
          {paginatedVideos.map((video) => (
            <a
              key={video.id}
              href={`/${video.id}-${video.title.replace(/ /g, "-")}`}
            >
              <div className="img-container">
                <img
                  src={video.default_thumb.src}
                  alt={video.title}
                  className="thumbnil"
                />
                <p className="video-time">{video.length_min} min</p>
              </div>

              {video.title.length > 60 ? (
                <h2 className="title">
                  {video.title.substring(0, 60) + "..."}
                </h2>
              ) : (
                <h2 className="title">{video.title}</h2>
              )}
            </a>
          ))}

          {/* Pagination Controls */}
          <div className="pagination">
            {/* Previous Button */}
            {currentPage > 1 && (
              <a href={`/yoga/?page=${currentPage - 1}`} className="pagination-link">
                Previous
              </a>
            )}

            {/* Current Page Indicator */}
            <span className="current-page">Page {currentPage}</span>

            {/* Next Button */}
            {currentPage < totalPages && (
              <a href={`/yoga/?page=${currentPage + 1}`} className="pagination-link">
                Next
              </a>
            )}
          </div>
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </>
  );
}
