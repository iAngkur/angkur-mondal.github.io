import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // ✅ Generate static HTML/CSS/JS
  images: {
    unoptimized: true,     // ✅ Required: Next.js image optimization needs a server
  },
  // ❌ NO basePath needed for username.github.io repos!
  // If you later use a subpath repo, add: basePath: '/repo-name',
};

export default nextConfig;