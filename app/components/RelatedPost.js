import "../css/RelatedPost.css"

export default async function RelatedPost() {


    const url = "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json"

      let data = null;

    try {
        const res = await fetch(relatedUrl);
    
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        data = await res.json();
        console.log(relatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
  return (
    <div>
      <h2 className="related-h2">Related Posts</h2>
    </div>
  )
}
