import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "development") {
      return { beforeFiles: [], afterFiles: [], fallback: [] };
    }

    return {
      beforeFiles: [
        {
          source: "/api/mpurse.php",
          destination: "http://127.0.0.1:8091/mpurse.php",
        },
        {
          source: "/api/mpurse-webhook.php",
          destination: "http://127.0.0.1:8091/mpurse-webhook.php",
        },
        {
          source: "/api/submit.php",
          destination: "http://127.0.0.1:8091/submit.php",
        },
        {
          source: "/mail.php",
          destination: "http://127.0.0.1:8091/submit.php",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
