import Vue from "vue"
import Vuex from "vuex"
import user from './user/index.js'
import articleList from './articleList/index.js'
import glucose from './glucose/index.js'
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		user,
		articleList,
		glucose
	}
	
})