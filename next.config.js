module.exports = {
  webpack: (config, { dev }) => {
    //    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
    config.node = { fs: 'empty', module: 'empty' }
    return config
  },
}
