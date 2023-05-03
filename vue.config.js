module.exports = {
	devServer:{
		disableHostCheck:true,
		proxy:{
			'/uaa':{
				target:'http://60.204.146.209:9013',
				changeOrigin:true,
			}
		}
	}
}