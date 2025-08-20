// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Hapus basePath dan assetPrefix atau sesuaikan dengan nama repository
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio1-gilang.github.io' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio1-gilang.github.io/' : '',
  // Untuk GitHub Pages, biasanya tidak perlu basePath jika menggunakan custom domain atau user pages
  trailingSlash: true, // Direkomendasikan untuk static export
};

export default nextConfig;
