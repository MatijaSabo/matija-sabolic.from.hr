// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: `/${process.env.contentful_space}/**`,
        search: '',
      },
    ],
  },
  env: {
    API_HOST: process.env.api_host,
    API_REFRESH_PERIOD: process.env.api_refresh_period,
    CONTENTFUL_SPACE: process.env.contentful_space,
    CONTENTFUL_ENV: process.env.contentful_env,
    CONTENTFUL_ENTITY_ID: process.env.contentful_entity_id,
    CONTENTFUL_DELIVERY_API_KEY: process.env.contentful_delivery_api,
    CONTENTFUL_PREVIEW_API_KEY: process.env.contentful_preview_api,
    RESEND_API_KEY: process.env.resend_api_key,
  }
}

module.exports = nextConfig