/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "flagcdn.com", "server.albantsho.com", "localhost"],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/admin/blogs',
        permanent: false,
      },
      {
        source: '/dashboard/writer',
        destination: '/dashboard/writer/projects',
        permanent: false,
      },
      {
        source: '/wallet',
        destination: '/wallet/help',
        permanent: false,
      },
      {
        source: '/dashboard/admin',
        destination: '/dashboard/admin/blogs',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
