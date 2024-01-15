/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || "http://3.24.191.174:5000/api/",
    BASE_IMAGE_URL: process.env.NASE_IMAGE_URL || 'https://akkukachasma.s3.amazonaws.com/'
  },
  images: {
    domains: ['https://akkukachasma.s3.amazonaws.com/product_images/'],
  },
};

module.exports = nextConfig;
