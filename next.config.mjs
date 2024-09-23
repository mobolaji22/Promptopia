/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's now standard
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // webpack function can be removed if you don't need top-level await
};

export default nextConfig;
