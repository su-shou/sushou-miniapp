<template>
	<view>
		<u-modal :show="show" :content='content' :showCancelButton="true" @confirm='LogoutTrigger' @cancel="show = false"></u-modal>
		<view style="height: 140px; background-color: #ca47ff; padding: 20px; color: aliceblue;display: flex;justify-content: center;align-items: center;">
			<view style="text-align: center;" @click="UserLoginTrigger ">
				<u-avatar :src="userinfo.avatar" size="80"></u-avatar>
				<text v-if="!logined" style="font-size: 13px;">点击登录</text>
				<text v-else style="font-size: 13px;">{{userinfo.nickname}}</text>
			</view>
		</view>
		<view>
			<u-grid customStyle="margin-top: 15px; margin-bottom: 20px;">
				<u-grid-item @click="myOrder">
					<u-icon
							:customStyle="{paddingTop:20+'rpx'}"
							name="order"
							:size="22"
					></u-icon>
					<text class="grid-text">我的订单</text>
				</u-grid-item>
			</u-grid>
			<u-line color="#2979ff"></u-line>
			<text style="font-size: 30rpx; display: block;margin-top: 20rpx;margin-bottom: 20rpx;margin-left: 20rpx;">关于 - About</text>
			<u-line color="#c3c3c3"></u-line>
			<text style="color: #ca47ff; text-align: center; font-size: 25rpx;display: block;margin-top: 40rpx;">速收 - 开源电子产品回收平台</text>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				show: false,
				content: '确认退出登录？'
			}
		},
		computed: mapGetters(['userinfo', 'logined']),
		methods: {
			...mapMutations(['logout']),
			UserLoginTrigger(){
				if(this.logined){
					this.show = true
				}else{
					uni.navigateTo({
						url: './login'
					})
				}
			},
			LogoutTrigger(){
				this.logout()
				this.show = false
			},
			myOrder(){
				if(this.logined){
					
				}else{
					uni.navigateTo({
						url: './login'
					})
				}
			}
		}
	}
</script>

<style>

</style>
