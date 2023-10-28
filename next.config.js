/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com",  "tailwindui.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig
