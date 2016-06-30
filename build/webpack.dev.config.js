var config = require('./webpack.base.config')

config.devtool = '#source-map'
/*config.devServer = {
	 noInfo: true,
     proxy: {
            '/login': {
                target: 'http://172.24.242.2:8080/' //映射
             }
        }
}*/
config.devServer={
	proxyTable:{
		'/login':{
			target:'http://172.24.242.2:8080',
			changeOrigin:true
		},
		pathRewrite: {
          '^/login': ''
        }
	}
}
// $.ajax 里面直接写
// url:'/login'
// 
module.exports = config

