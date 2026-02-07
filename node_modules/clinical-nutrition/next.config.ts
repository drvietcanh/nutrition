import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compress: true,
  
  /* Enable React strict mode for better development experience */
  reactStrictMode: true,
  
  /* Optimize images */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  
  /* Experimental features for better performance */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
