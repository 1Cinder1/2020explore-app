import {getArticleList} from '@/api/request.js'
const state={
	aticleList:{}
}
const mutations={
	GETARTICLELIST(state,aticleList){
		state.aticleList=aticleList
	}
}
const actions={
	async getArticleList({commit}){
		let result = await getArticleList()
		console.log(result)
		if(result.code==1000){
			commit('GETARTICLELIST',result.data)
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