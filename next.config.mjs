// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ◀── INI YANG PENTING!
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
