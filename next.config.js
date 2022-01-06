const withPWA = require('next-pwa');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'preview' ||
      process.env.NODE_ENV === 'production',
    // delete two lines above to enable PWA in production deployment
    // add your own icons to public/manifest.json
    // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: 'public',
    register: true,
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  webpack(config, { dev, isServer }) {
    config.plugins.push(new WindiCSSWebpackPlugin());

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
  images: {
    domains: ['vercel.com'],
  },
});
