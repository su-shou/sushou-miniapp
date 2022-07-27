export default {
	state: {
		avatarUrl: "/static/avatar.png",
		nickName: "",
		logined: false,
		openid: '',
		token: ''
	},
	getters: {
		userinfo(state) {
			return {
				avatar: state.avatarUrl,
				nickname: state.nickName
			}
		},
		logined(state) {
			return state.logined
		}
	},
	mutations: {
		login(state, payload){
			state.avatarUrl = payload.avatarUrl
			state.nickName = payload.nickName
			state.openid = payload.openid
			state.token = payload.token
			state.logined = true
		},
		logout(state){
			state.avatarUrl = '/static/avatar.png'
			state.nickName = ''
			state.openid = ''
			state.token = ''
			state.logined = false
		}
	},
	actions: { 
		
	}
}