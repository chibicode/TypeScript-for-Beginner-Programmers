const path = require('path')

const config = {
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      src: path.resolve(__dirname, 'src')
    })

    return config
  }
}

module.exports = config
