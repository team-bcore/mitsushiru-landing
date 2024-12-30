// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Webpackのキャッシュを無効化する場合の設定
    webpack: (config, { dev, isServer }) => {
      // オプション1: キャッシュを完全に無効化
      config.cache = false
      
      // オプション2: キャッシュ戦略の設定
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            ...config.optimization.splitChunks,
            // Tailwindのスタイルを一緒にバンドルすることを確実にする
            cacheGroups: {
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
              }
            }
          }
        }
      }
      
      return config
    },
    
    // その他のNext.jsの設定オプション
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig