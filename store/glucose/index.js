
import {getHeartHistory} from '@/api/request.js'
const state={
	avgGlucoseLevelAverage:[]
}
const mutations={
	GETHEARTHISTORY(state,avgGlucoseLevelAverage){
		state.avgGlucoseLevelAverage=avgGlucoseLevelAverage
	}
}
const actions={
	async getHeartHistory({commit}){
		let result = await getHeartHistory()
		console.log(result)
		if(result.code==1000){
			commit('GETHEARTHISTORY',result.data)
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