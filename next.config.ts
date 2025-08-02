import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://dev-to-uploads.s3.amazonaws.com/**")],
  },
};

export default nextConfig;
