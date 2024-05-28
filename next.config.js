const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || "http://3.24.191.174:5000/api/",
    BASE_IMAGE_URL:
      process.env.NASE_IMAGE_URL ||
      "https://akkukachasma.s3.us-east-1.amazonaws.com/",
  },
  images: {
    domains: [
      "akkukachasma.s3.us-east-1.amazonaws.com",
      "akkukachasma.s3.amazonaws.com",
      "cdn.pixabay.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akkukachasma.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = { ...nextConfig };
