import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind CSS is ~6 KB: inlining it removes the only render-blocking
    // request before the first paint.
    inlineCss: true,
  },
};

export default nextConfig;
