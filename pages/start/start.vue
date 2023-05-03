<template>
	<view>
		<view class="box">
		<view class="contentTitle">
			spring of veins
		</view>
		<view class="selectOption">
			<button @click="toSignUp">Sign Up</button>
			<button @click="toSignIn">Sign In</button>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			uni.getStorage({
				key:'uaa_token',
				success: () => {
					uni.navigateTo({
						url:'/pages/home/home'
					})
				}
			})
		},
		methods: {
			toSignUp(){
				uni.navigateTo({
					url:'/pages/SignUp/SignUp'
				})
			},
			toSignIn(){
				uni.navigateTo({
					url:'/pages/SignIn/SignIn'
				})
			}
		}
	}
</script>

<style>
page{
	height: 100%;
	background-image: url('../../static/bg/signBg.jpg');
	background-size: 100%;
	background-repeat: no-repeat;
}
.box{
	display: flex;
	height: 1200rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.contentTitle{
	width: 750rpx;
	height: 700rpx;
	text-align: center;
	font-family: 'STHupo';
	line-height: 700rpx;
	color: white;
	font-size: 70rpx;
	font-weight: 700;
}
.selectOption{
	width: 600rpx;
	
}
.selectOption>button:nth-child(1){
	margin: 30rpx 0;
	border-radius: 20rpx;
	background-color: #7f6df2;
	color: white;
}
.selectOption>button:nth-child(2){
	border-radius: 20rpx;
	border:1px solid #7f6df2;
	background-color: transparent;
	color: white;
}
</style>
