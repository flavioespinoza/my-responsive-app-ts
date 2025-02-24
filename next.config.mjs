/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production
  productionSourceMaps: false,

  // Configure Webpack to avoid using `eval()` in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map' // Use safer source maps during development
    }
    return config
  }
}

export default nextConfig
