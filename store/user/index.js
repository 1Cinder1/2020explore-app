import {getUserInfo} from '@/api/request.js'
const state={
	userInfo:{},
	userToken:uni.getStorage({
		key:'uaa_token'
	})
}
const mutations={
	GETUSERINFO(state,userInfo){
		state.userInfo=userInfo
	},
	GETUSERTOKEN(state,userToken){
		state.userToken=userToken
	}
}
const actions={
	//发送request请求，获取到数据之后进行vuex数据共享
	async getUserInfo({commit},data){
		let result = await getUserInfo(data)
		console.log(result)
		if(result.code==1000){
			commit('GETUSERINFO',result.data)
			uni.setStorage({
				key:'uaa_token',
				data:`bearer ${result.data.access_token}`
			})
			return 'ok'
		}else{
            return Promise.reject(new Error('faile'))
        }
	},
	async getUserToken({commit},data){
		let result = await getUserInfo(data)
		console.log(result)
		if(result.code==1000){
			commit('GETUSERTOKEN',`bearer ${result.data.access_token}`)
			uni.setStorage({
				key:'uaa_token',
				data:`bearer ${result.data.access_token}`
			})
			return 'ok'
		}else{
	        return Promise.reject(new Error('faile'))
	    }
	},
}
const getters={}
export default{
	state,
	mutations,
	actions,
	getters
}