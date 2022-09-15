/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    domains: ['raw.githubusercontent.com'],
  },

  webpack(config) {
    config.module.rules.push(
      // SVGR
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              icon: true,
              dimensions: false,
            },
          },
        ],
      },
      // MP3
      {
        test: /\.(mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name].[hash][ext]',
        },
      }
    );

    return config;
  },
};
