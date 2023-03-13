/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: { domains: ['picsum.photos'] },
};

module.exports = nextConfig;
