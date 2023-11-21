/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // clerk images
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      // unsplash images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
