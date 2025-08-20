/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Hapus atau comment basePath dan assetPrefix
  // basePath: "/portfolio1-gilang.github.io",
  // assetPrefix: "/portfolio1-gilang.github.io/",
  trailingSlash: true, // Direkomendasikan untuk static export
};

export default nextConfig;
