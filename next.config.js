/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
