// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProd
    ? {
        basePath: "/portfolio1-gilang.github.io",
        assetPrefix: "/portfolio1-gilang.github.io/",
      }
    : {}),
};

export default nextConfig;
