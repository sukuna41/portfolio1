/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // ◀── Recomended untuk GitHub Pages
  images: {
    unoptimized: true, // ◀── Jika menggunakan next/image
  },
  reactStrictMode: false, // WAJIB untuk animasi
  // swcMinify: false, // Nonaktifkan SWC
  // experimental: {
  //   optimizePackageImports: ["framer-motion"],
  //   serverActions: true,
  // },
};

export default nextConfig;
