/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Penting untuk static export
  },
  // HAPUS basePath dan assetPrefix untuk repository username.github.io
  // basePath: "/portfolio1-gilang.github.io",  // HAPUS BARIS INI
  // assetPrefix: "/portfolio1-gilang.github.io/",  // HAPUS BARIS INI
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
