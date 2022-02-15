const { resolve } = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@types': resolve(__dirname, 'src/types'),
      '@components': resolve(__dirname, 'src/components'),
      '@containers': resolve(__dirname, 'src/containers'),
      '@store': resolve(__dirname, 'src/store')
    }
  }

  return config
}
