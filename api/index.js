import store from '../store/index.js'
const url_all = {
	// #ifdef H5
	'DEV': '/uaa',
	// #endif
	// #ifdef APP
	'DEV': 'http://60.204.146.209:9013/uaa', // 开发
	// #endif
}
let BASEURL = url_all['DEV']
export const authRequest = (options = {}) => {
	return new Promise((resolve, rejects) => {
		handleAuthRequest(options, resolve, rejects)
	})
}
export const basicRequest = (options = {}) => {
	return new Promise((resolve, rejects) => {
		handleBasicRequest(options, resolve, rejects)
	})
}
// 发起有token请求
function handleAuthRequest(options, resolve, reject) {
	let token=''
	uni.getStorage({
		key:'uaa_token',
		success: (res) => {
			token=res.data
			uni.request({
				url: BASEURL + options.url,
				method: options.method,
				data: options.data,
				header: { //设置请求的 header
				//如果我们登录了，就会有token就可以在头部定义这个，如果没登入则没有value值
					"Authorization": token||null, //自定义请求头信息
				},
				success: (response) => {
					return resolve(response.data)
				},
				fail: (fail) => {
					console.log('fail', fail)
					return reject(fail);
				}
			})
		}
	})
	
}

// 发起无token请求
function handleBasicRequest(options, resolve, reject) {
	uni.request({
		url: BASEURL + options.url,
		method: options.method,
		data: options.data,
		success: (response) => {
			return resolve(response.data)
		},
		fail: (fail) => {
			console.log('fail', fail)
			return reject(fail);
		}
	})
}