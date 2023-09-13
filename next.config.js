/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "d1jnt6hom5skcs.cloudfront.net",
      "d1lwt7q4fvbsnv.cloudfront.net",
      "swiperjs.com",
    ],
  },
};

module.exports = nextConfig;
