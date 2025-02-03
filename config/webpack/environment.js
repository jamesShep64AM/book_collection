const { environment } = require('@rails/webpacker')

environment.loaders.append('babel', {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader'
  }]
})

module.exports = environment