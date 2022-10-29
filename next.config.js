const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
