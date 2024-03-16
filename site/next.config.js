/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Wal7er5 Registry',
    description: 'My list of Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://walts81.github.io/kasm-registry/',
    contactUrl: 'https://github.com/walts81/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
