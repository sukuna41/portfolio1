// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio1-gilang.github.io",
  assetPrefix: "/portfolio1-gilang.github.io/",
};

export default nextConfig;
