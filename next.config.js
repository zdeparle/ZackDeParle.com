const nextConfig = {
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    // Make sure you are actually using `metadataBase` in your application.
    metadataBase: 'http://localhost:3000',
  },
};

module.exports = nextConfig;
