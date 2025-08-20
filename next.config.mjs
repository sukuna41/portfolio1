/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // supaya bisa jadi static export (Next.js -> HTML/CSS/JS)
  images: {
    unoptimized: true, // kalau ada pakai next/image
  },
  basePath: "/portfolio1-gilang.github.io", // sesuaikan dengan nama repository
  assetPrefix: "/portfolio1-gilang.github.io/",
};

module.exports = nextConfig;
