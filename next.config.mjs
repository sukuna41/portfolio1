/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio1-gilang.github.io",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // HAPUS experimental.serverActions dan swcMinify
};

export default nextConfig;
