/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // WAJIB untuk animasi
  swcMinify: false, // Nonaktifkan SWC
  experimental: {
    optimizePackageImports: ["framer-motion"],
    serverActions: true,
  },
};

export default nextConfig;
