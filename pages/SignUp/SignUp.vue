<template>
	<view style="margin: 0 30rpx;">
		<view class="box">
			<view class="title">
				<view>
					Create Account
				</view>
				<view>
					<view>
						Already have an account?
					</view>
					<view class="toSignUp" @click="toSignIn">
						Sign In!
					</view>
				</view>
			</view>
			<uni-forms ref="forms" class="form" @submit="formSubmit" :rules="rules" :modelValue="FormData"
				label-width="350rpx" label-position="top">
				<uni-forms-item class="formItem" label="Usernmae" name="Username">
					<view class="formIpt">
						<input type="text" v-model="FormData.Username" placeholder="Please enter username">
					</view>
				</uni-forms-item>
				<uni-forms-item class="formItem" name="Email" label="Email">
					<view class="formIpt">
						<input type="text" v-model="FormData.Email" placeholder="Please enter email">
					</view>
				</uni-forms-item>
				<uni-forms-item class="formItem" name="EmailCode" label="Email verification code">
					<view class="formIpt" style="display: flex;">
						<input style="width: 200rpx;" type="number" v-model="FormData.EmailCode"
							placeholder="Please enter emailCode">
						<button class="EmailCodeBtn" :class="{active:send}" :disabled="send"
							@click="getEmailCode">{{EmailCodeIptContent}}</button>
					</view>

				</uni-forms-item>
				<uni-forms-item class="formItem" name="Password" label="Password">
					<view class="formIpt">
						<input type="password" v-model="FormData.Password" placeholder="Please enter password">
					</view>
				</uni-forms-item>
				<uni-forms-item class="formItem" name="Cofirmpassword" label="Cofirm password">
					<view class="formIpt">
						<input type="password" v-model="FormData.Cofirmpassword"
							placeholder="Please confirm the password">
					</view>
				</uni-forms-item>
				<button class="submitBtn" form-type="submit" @click="formSubmit">Sign Up</button>
			</uni-forms>

		</view>
	</view>
</template>
<script>
	import {getEmailCode} from "@/api/request.js"
	export default {
		data() {
			return {
				FormData: {
					Username: '',
					Email: '',
					EmailCode: '',
					Password: '',
					Cofirmpassword: ''
				},
				rules: {
					Username: {
						rules: [{
							required: true,
							errorMessage: 'Username cannot be empty'
						}]
					},
					Email: {
						rules: [{
							required: true,
							errorMessage: 'Email cannot be empty'
						}]
					},
					EmailCode: {
						rules: [{
							required: true,
							errorMessage: 'code cannot be empty'
						}, {
							format: 'number',
							errorMessage: 'Code can only be numbers'
						}]
					},
					Password: {
						rules: [{
							required: true,
							errorMessage: 'Password cannot be empty'
						}]
					},
					Cofirmpassword: {
						rules: [{
								required: true,
								errorMessage: 'Password cannot be empty'
							},
							{
								validateFunction: (rules,value,callback) => {
									if (value != this.FormData.Password) {
										return false
									}else{
										return true
									}
								},
							}
						]
					},
				},
				send: false,
				countDown: 60,
				EmailCodeIptContent: "Send verification code"
			}
		},
		onReady() {
				// 需要在onReady中设置规则
				this.$refs.forms.setRules(this.rules)
			},
		methods: {
			formSubmit(e) {
				this.$refs.forms.validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`,
						success: async () => {
							//发送request请求，这里不许用进行数据储存，所有我们直接发送request请求
							try{
								let result = await this.$requests.userRegister({
									email:res.Email,
									emailCode:res.EmailCode,
									password:res.Password
								})
								if(result.success==1){
								//成功后跳转到start界面
								uni.navigateTo({
									url: '/pages/start/start'
								})	
								}
								
							}catch(e){
								//TODO handle the exception
								alert(e.message)
							}
							
						}
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			//跳转到Sign In
			toSignIn() {
				uni.navigateTo({
					url: '/pages/SignIn/SignIn'
				})
			},
			async getEmailCode() {
				this.EmailCodeIptContent = `Resend at ${this.countDown}s later`
				this.send = true
				let timer = setInterval(() => {
					this.countDown--
					this.EmailCodeIptContent = `Resend at ${this.countDown}s later`
					this.send = true
					if (this.countDown == 0) {
						clearInterval(timer)
						this.countDown = 60
						this.send = false
						this.EmailCodeIptContent = `Resend`
					}
				}, 1000)
				await getEmailCode(this.FormData.Email)
				//await this.$requests.getEmailCode(this.FormData.Email)
				
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
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

	.formItem .formIpt {
		display: flex;
		align-items: center;
		width: 630rpx;
		height: 70rpx;
		padding: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(241, 245, 251, 0.6);
	}

	.formItem .formIpt>input {
		width: 600rpx;
	}

	.submitBtn {
		width: 500rpx;
		color: white;
		background-color: #7f6df2;
		border-radius: 20rpx;
		position: fixed;
		bottom: 50rpx;
		left: 125rpx;
	}

	.EmailCodeBtn {
		width: 400rpx;
		border-radius: 20rpx;
		background-color: #9584ff;
		color: white;
	}

	.EmailCodeBtn.active {
		width: 400rpx;
		border-radius: 20rpx;
		background-color: #c0b7fa;
		color: white;
	}
</style>