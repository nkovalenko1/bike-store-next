/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        pg: false,
        'pg-native': false,
        '@prisma/adapter-pg': false,
      };
      
      // Exclude pg and adapter from client bundle
      config.externals = config.externals || [];
      config.externals.push({
        'pg': 'commonjs pg',
        '@prisma/adapter-pg': 'commonjs @prisma/adapter-pg',
      });
    }
    return config;
  },
};

export default nextConfig;
