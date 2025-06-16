// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/LinkedIn',
        destination: "https://www.linkedin.com/in/matija-saboli%C4%87/",
        permanent: true
      },
      {
        source: "/GitHub",
        destination: "https://github.com/MatijaSabo",
        permanent: true
      }
    ]
  },
  reactStrictMode: true,
  env: {
    API_HOST: process.env.apiHost
  }
}

module.exports = nextConfig