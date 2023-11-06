const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add this to set a base URL for metadata
  publicRuntimeConfig: {
    metadataBase: 'http://localhost:3000',
  },
};

module.exports = nextConfig;
