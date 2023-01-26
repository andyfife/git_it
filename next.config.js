/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'res.cloudinary.com',
      'milkywayfiasco.sfo2.cdn.digitaloceanspaces.com',
    ],
  },
};

module.exports = nextConfig;
