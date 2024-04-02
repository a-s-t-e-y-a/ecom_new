const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || "http://3.24.191.174:5000/api/",
    BASE_IMAGE_URL:
      process.env.NASE_IMAGE_URL ||
      "https://akkukachasma.s3.amazonaws.com/product_images/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akkukachasma.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ], // Change this to the domain only
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};


module.exports = { ...nextConfig }; // Merging redirects with nextConfig
