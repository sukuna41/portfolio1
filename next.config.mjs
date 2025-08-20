/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/portfolio1-gilang.github.io" : "", // Ganti dengan nama repo Anda
  assetPrefix: isProd
    ? "https://sukuna41.github.io/portfolio1-gilang.github.io/"
    : "", // Sesuaikan URL
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
