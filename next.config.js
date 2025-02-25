/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint hatalarını build sırasında görmezden gel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type check hatalarını build sırasında görmezden gel
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 