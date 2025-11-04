/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack to fix lightningcss build errors
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
