var config = require('./webpack.base.config')

config.devtool = '#source-map'

module.exports = config
/*config.devServer = {
     proxy: {
            '/login*': {
                target: 'http://172.24.242.2:8080/',
                secure: false,
            }
        }
}*/
