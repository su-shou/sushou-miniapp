import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		"serverUri": "http://192.168.123.94:8000"
	},
	modules: {
		auth
	}
})

export default store