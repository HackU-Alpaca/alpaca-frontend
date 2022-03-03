const api_key = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
const base_url = "https://pixabay.com/api/"
const option = "&per_page=40";
const image_url = base_url + "?key=" + api_key + option;
const video_url = base_url + "videos/?key=" + api_key + option;

const fetcher = which => {
  switch (which) {
    case "images":
      const images = fetch(image_url)
        .then( res => res.json() )
        .then( image => image.hits )
      return images;

    case "videos":
      const videos = fetch(video_url)
        .then( res => res.json() )
        .then( video => video.hits )
      return videos;

    default:
      break;
  }
}


export { fetcher };