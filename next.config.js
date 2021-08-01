module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/blog': { page: '/blog.html' },
  //   }
  // },
  // trailingSlash: true, Why did I enable this?
  images: {
    loader: 'imgix',
    path: '/',
  },
}