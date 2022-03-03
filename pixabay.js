
const getImages = () => {
  const api_key = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
  const base_url = "https://pixabay.com/api/?key="
  const option = "&per_page=40";
  const url = base_url + api_key + option;
  const images = fetch( url ).then( data => data.json())
  return images;
}

export { getImages };