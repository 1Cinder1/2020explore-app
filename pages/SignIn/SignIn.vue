<template>
	<view style="margin: 0 30rpx;">
		<view class="box">
			<view class="title">
				<view>
					Sign In
				</view>
				<view>
					<view>
						Don'n have an account?
					</view>
					<view class="toSignUp" @click="toSignUp">
						Sign Up!
					</view>
				</view>
			</view>
			<uni-forms ref="forms" class="form" @submit="formSubmit" :rules="rules" :modelValue="FormData"
				label-width="350rpx" label-position="top">

				<uni-forms-item class="formItem" name="Email" label="Email">
					<view class="formIpt">
						<input type="text" v-model="FormData.Email" placeholder="Please enter email">
					</view>
				</uni-forms-item>
				<uni-forms-item class="formItem" name="Password" label="Password">
					<view class="formIpt">
						<input type="password" v-model="FormData.Password" placeholder="Please enter password">
					</view>
				</uni-forms-item>
				<button class="submitBtn" form-type="submit" @click="formSubmit">Sign In</button>
				<label>
					<checkbox value="" style="transform:scale(0.7)" /><text style="font-size: 25rpx;">Forgot your
						Password?</text>
				</label>
			</uni-forms>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				FormData: {
					Email: '',
					Password: ''
				},
				rules: {
					Email: {
						rules: [{
							required: true,
							errorMessage: 'Email cannot be empty'
						}]
					},
					Password: {
						rules: [{
							required: true,
							errorMessage: 'Password cannot be empty'
						}]
					}
				},
			}
		},
		methods: {
			formSubmit(e) {
				this.$refs.forms.validate().then(res => {
					// console.log('success', res);
					uni.showToast({
						title: `校验通过`,
						success: async () => {
							//发送actions
							try {
								await this.$store.dispatch('getUserToken', {
									username: res.Email,
									password: res.Password
								})
								//成功后跳转到start界面
								uni.navigateTo({
									url: '/pages/home/home'
								})

								

							} catch (e) {
								//TODO handle the exception
								alert(error.message)
							}


						}
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			//跳转到Sign Up
			toSignUp() {
				uni.navigateTo({
					url: '/pages/SignUp/SignUp'
				})
			},
		}
	}
</script>

<style>
	page {
		height: 100%;
		overflow: hidden;
		background-image: url('../../static/bg/startBg.jpg');
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.title {
		width: 750rpx;
		height: 325rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.title>view:nth-child(1) {
		font-size: 50rpx;
		font-weight: 600;
		margin-bottom: 30rpx;
	}

	.title>view:nth-child(2) {
		color: #8b899f;
		display: flex;
		font-size: 30rpx;
	}

	.title .toSignUp {
		color: #3371d3;
		margin-left: 10rpx;
	}

	.formItem {
		width: 700rpx;
		height: auto;
		margin-bottom: 30rpx;
	}

	.formLabel {
		color: #cacad0;
		margin-bottom: 40rpx;
	}

	.formItem .formIpt {
		width: 630rpx;
		height: 50rpx;
		padding: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(241, 245, 251, 0.6);
	}

	button {
		width: 500rpx;
		color: white;
		background-color: #7f6df2;
		position: fixed;
		border-radius: 20rpx;
		bottom: 50rpx;
		left: 125rpx;
	}
</style>