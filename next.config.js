/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "flagcdn.com", "176.9.142.250"],
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
        destination: '/dashboard/listings',
        permanent: false,
      },
      {
        source: '/wallet',
        destination: '/wallet/help',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/admin/blogs',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
