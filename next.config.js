/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path untuk GitHub Pages
  basePath:
    process.env.NODE_ENV === "production" ? "/portfolio1-gilang.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/portfolio1-gilang.github.io/"
      : "",
};

module.exports = nextConfig;
