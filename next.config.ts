  import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/classroom-webxr',
  assetPrefix: '/classroom-webxr/'
};

export default nextConfig;
