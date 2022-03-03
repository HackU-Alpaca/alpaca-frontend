/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    pixabay_api_key: process.env.NEXT_PUBLIC_PIXABAY_API_KEY,
  },
  images: {
    domains: [
      "cdn.pixabay.com",
      "pixabay.com",
  ]}
};

module.exports = nextConfig;
