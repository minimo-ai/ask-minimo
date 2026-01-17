/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/og-image.png',
        headers: [
          { key: 'Content-Type', value: 'image/png' },
        ],
      },
    ];
  },
};

export default nextConfig;
