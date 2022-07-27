<template>
	<view>
		<view v-show="title != ''">
			<u-alert :title="title" type="warning" ></u-alert>
		</view>
		<text style="text-align: center;font-size: 40rpx;display: block;margin: 30rpx;margin-top: 30vh;">登录授权</text>
		<button style="width: 80vw;background-color: #04BE02;color: #fff;" open-type="getUserInfo" @getuserinfo="wxlogin">微信登录</button>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				title: ''
			}
		},
		computed: mapState({
		   serverUri: state => state.serverUri
		}),
		methods: {
			...mapMutations(['login']),
			wxlogin(){
				let that = this
				uni.login({
				  provider: 'weixin',
				  onlyAuthorize: true,
				  success: (loginRes) => {
					if(loginRes.errMsg == "login:ok"){
						uni.getUserInfo({
						  provider: 'weixin',
						  success: (infoRes) => {
							uni.request({
								url: that.serverUri + '/users/login',
								method: 'POST',
								data: {
									code: loginRes.code,
									userInfo: infoRes.userInfo
								},
								success: (res) => {
									if(res.data.openid){
										that.login({
											...infoRes.userInfo,
											openid: res.data.openid,
											token: res.data.token
										})
										uni.navigateBack()
									}else{
										this.title = '登录授权错误，请重试。'
									}
								},
								fail: (e) => {
									console.log(e)
									this.title = '登录授权错误，请重试。'
								}
							})
						  }
						})
					}
				  },
				  fail: (e) => {
					console.log(e)
				  	this.title = '登录授权错误，请重试。'
				  }
				});
			}
		}
	}
</script>

<style>

</style>
