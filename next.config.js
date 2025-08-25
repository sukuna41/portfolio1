/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio1",
  assetPrefix: "/portfolio1/",
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
