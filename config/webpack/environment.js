const { environment } = require('@rails/webpacker')

module.exports = environment
environment.config.delete('node')

module.exports = environment

