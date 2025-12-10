/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 适配GitHub Pages部署
  images: {
    unoptimized: true, // 静态导出时禁用图片优化
  },
  webpack: (config) => {
    config.resolve.extensions.push('.toml'); // 支持toml文件解析
    config.module.rules.push({
      test: /\.toml$/,
      use: 'toml-loader',
    });
    return config;
  },
};

module.exports = nextConfig;