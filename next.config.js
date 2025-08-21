/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Penting untuk static export
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
