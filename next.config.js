/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // This is for webpack builds (e.g., production)
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js", // Treat as JavaScript modules
      },
    },
  },
};

module.exports = nextConfig;
