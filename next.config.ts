import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Enable Fast Refresh
    if (dev && !isServer) {
      config.optimization.moduleIds = 'named';
    }
    return config;
  },
};

export default nextConfig;
