import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "http",
        hostname: "process.env.DOMAIN!",
      },
    ],
  },
}

export default nextConfig
