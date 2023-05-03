<template>
	<view>
		<view class="head">
			<uni-icons @click="goback" class="arrowLeft" style="font-size: 100rpx;font-weight: 800;"
				type="arrow-left"></uni-icons>
			<view class="headContent">Settings</view>
		</view>
		<view class="userInfoSetting">
			<view class="userEssInfo">
				<view @click="selectImg" class="userImg">
					<img src="../../static/user/headImgjpg.jpg" alt="">
				</view>
				<view class="usernameEamil">
					<view v-if="!setUsernameEamil">{{usernameEamil.name}}</view>
					<input name="name" v-else style="width: 300rpx;" type="text" :placeholder="usernameEamil.name"
						@confirm="setUsernameEamil=!setUsernameEamil" @blur="SetUsernameEamilCpt('name')"
						@input="infoInput">
					<view v-if="!setUsernameEamil">{{usernameEamil.email}}</view>
					<input name="email" v-else style="width: 300rpx;" type="text" :placeholder="usernameEamil.email"
						@confirm="setUsernameEamil=!setUsernameEamil" @blur="SetUsernameEamilCpt('email')">

				</view>
				<view @click="setUsernameEamil=!setUsernameEamil">
					<img src="../../static/user/修改.png" alt="">
				</view>
			</view>
			<view class="userAccount">
				<view class="userAccountItem" @click="open(index)" v-for="(userAccountItem,index) in user" :key="index">
					<view class="userAccountImg">
						<img :src="userAccountItem.userAccountImg" alt="">
					</view>
					<view class="userAccountContent">
						<view v-for="(userAccountContent,index) in userAccountItem.userAccountContent" :key="index">
							{{userAccountContent}}
						</view>
					</view>
					<view class="userAccountSet" @click="changeUserAccount(userAccountItem)">
						<img v-if="!userAccountItem.active" style="width: 50rpx;" src="../../static/user/方向-向右.png"
							alt="">
						<img v-else style="width: 50rpx;" src="../../static/user/方向-向下.png" alt="">
					</view>
				</view>
			</view>
			<view class="userAllInfo">
				<view class="userAllInfoItem" v-for="(userAllInfoItem,key,index) in userset" :key="index">
					<view class="userAllInfoTitle">
						{{key}}
					</view>
					<view style="display: flex;align-items: center;width: 300rpx;justify-content: flex-end;">
						<view class="userAllInfoContent">
							{{key=="phone"||key=="email"||key=="age" ? userAllInfoItem:SetContent[key][key][userAllInfoItem]}}
						</view>
						<view class="userAllInfoSet" v-if="SetContent[key].isSet"
							@click="changeUserAllInfo(key,SetContent[key][key])">
							<img v-if="!SetContent[key].active" style="width: 50rpx;" src="../../static/user/方向-向右.png"
								alt="">
							<img v-else style="width: 50rpx;" src="../../static/user/方向-向下.png" alt="">
						</view>
					</view>
				</view>
			</view>
			<view class="logOut">
				<button @click="logOut">Log Out</button>
			</view>
		</view>
		<uni-popup ref="popup">
			<view class="setPassword" style="background-color: white;border-radius: 30rpx 30rpx 30rpx 30rpx; margin-top: 400rpx;">
				<uni-forms ref="forms" class="form" @submit="formSubmit" :rules="rules" :modelValue="FormData"
					label-width="350rpx" label-position="top">
					<uni-forms-item class="formItem" name="captcha" label="Email verification code">
						<view class="formIpt" style="display: flex;">
							<input style="width: 200rpx;" type="number" v-model="FormData.EmailCode"
								placeholder="Please enter emailCode">
							<button class="EmailCodeBtn" :class="{active:send}" :disabled="send"
								@click="getEmailCode">{{EmailCodeIptContent}}</button>
						</view>
					</uni-forms-item>
					<uni-forms-item class="formItem" name="newPassword" label="Password">
						<view class="formIpt">
							<input type="password" v-model="FormData.Password" placeholder="Please enter password">
						</view>
					</uni-forms-item>
					<button class="submitBtn" form-type="submit" @click="formSubmit">submit</button>
				</uni-forms>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				FormData: {
					EmailCode: '',
					Password: '',
				},
				rules: {
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
						}],
					}
				},
				send: false,
				countDown: 60,
				EmailCodeIptContent: "Send verification code",
				setUsernameEamil: false,
				usernameEamil: {
					name: "Felicia Lee",
					email: '20937108@qq.com'
				},
				newNameEmail: {
					name: '',
					email: ''
				},
				user: [{
						userAccountImg: '../../static/user/Password.png',
						userAccountContent: ["Password", "Change your password"],
						active: false
					},
					{
						userAccountImg: '../../static/user/Email.png',
						userAccountContent: ["Eamil", "Change your eamil"],
						active: false
					},
					{
						userAccountImg: '../../static/user/Language.png',
						userAccountContent: ["Language", "Change your language"],
						active: false
					},
					{
						userAccountImg: '../../static/user/Privacy.png',
						userAccountContent: ["Privacy", "Change your privacy"],
						active: false
					}
				],
			// 	userset: [{
			// 			name: "Phone",
			// 			nowContent: 0,
			// 			SetContent: ["13011221122"],
			// 			isSet: false,
			// 			active: false
			// 		},
			// 		{
			// 			name: "race",
			// 			nowContent: 1,
			// 			SetContent: ['American Indian/Alaskan Native',
			// 				'Asian',
			// 				'Black',
			// 				'Hispanic',
			// 				'Other',
			// 				'White',
			// 			],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "age",
			// 			nowContent: 0,
			// 			SetContent: ['20'],
			// 			isSet: false,
			// 			active: false
			// 		},
			// 		{
			// 			name: "gender",
			// 			nowContent: 1,
			// 			SetContent: ['Female', 'Male'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "smokingStatue",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "everMarried",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "workType",
			// 			nowContent: 1,
			// 			SetContent: ['Govt_job',
			// 				'Private',
			// 				'Self-employed',
			// 				'children',
			// 				'Never_worked',
			// 			],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "residenceType",
			// 			nowContent: 1,
			// 			SetContent: ['Rural', 'Urban'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "asthma",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "kideyDisease",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true
			// 		},
			// 		{
			// 			name: "skinCancer",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "heartDisease",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "alcoholDrinking",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "diabetic",
			// 			nowContent: 0,
			// 			SetContent: ['Yes', 'No'],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 		{
			// 			name: "generalHealth",
			// 			nowContent: 0,
			// 			SetContent: ['Excellent',
			// 				'Fair',
			// 				'Good',
			// 				'Poor',
			// 				'Very good',
			// 			],
			// 			isSet: true,
			// 			active: false
			// 		},
			// 	]
			userset:{
				phone:"11111111",
				age:"20",
				email:"123456789@qq.com",
				gender:1,
				everMarried:0,
				workType:1,
				residenceType:1,
				race:1,
				smokingStatus:0,
				asthma:1,
				kidneyDisease:1,
				skinCancer:0,
				heartDisease:0,
				alcoholDrinking:1,
				diabetic:1,
				genHealth:2,
				stroke:1
			},
			SetContent:{
				phone:{
					phone:["456456"],
					active: false,
					isSet: false,
				},
				email:{
					email:["2842967348@qq.com"],
					active: false,
					isSet: false,
				},
				age:{
					age:["20"],
					active: false,
					isSet: false,
				},
				gender:{
					gender:['Female', 'Male'],
					active: false,
					isSet: true,
				},
				everMarried:{
					everMarried:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				workType:{
					workType:['Govt_job',
					'Private',
					'Self-employed',
					'children',
					'Never_worked',
				],
				active: false,
				isSet: true,
				},
				residenceType:{
					residenceType:['Rural', 'Urban'],
					active: false,
					isSet: true,
				},
				race:{
					race:['American Indian/Alaskan Native',
					'Asian',
					'Black',
					'Hispanic',
					'Other',
					'White',
				],
				active: false,
				isSet: true,
				},
				smokingStatus:{
					smokingStatus:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				asthma:{
					asthma:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				kidneyDisease:{
					kidneyDisease:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				skinCancer:{
					skinCancer:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				heartDisease:{
					heartDisease:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				alcoholDrinking:{
					alcoholDrinking:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				diabetic:{
					diabetic:['Yes', 'No'],
					active: false,
					isSet: true,
				},
				genHealth:{
					genHealth:['Excellent',
					'Fair',
					'Good',
					'Poor',
					'Very good',
				],
				active: false,
				isSet: true,
				},
				stroke:{
					stroke:['Yes', 'No'],
					active: false,
					isSet: true,
				}
			}
			}
		},
		onLoad() {
			// 获取数据
			this.getUserBasicInfo()
		},
		methods: {
			formSubmit(e) {
				this.$refs.forms.validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`,
						success: async() => {
							//发送request请求，这里不许用进行数据储存，所有我们直接发送request请求
							let result = await this.$requests.revisePassword({
								captcha:res.captcha,
								newPassword:res.newPassword
							})
							if(result.code==1000){
							}
						}
					})
				}).catch(err => {
					console.log('err', err);
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
				let result=await this.$requests.reviseCaptcha()
				console.log(result)

			},
			open(index) {
				console.log(index)
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				if (index === 0) {
					this.$refs.popup.open('top')
				}

			},
			infoInput(e) {
				console.log(e.detail)
			},
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeUserAccount(item) {
				item.active = !item.active

			},
			changeUserAllInfo(key,item) {
				this.SetContent[key].active=!this.SetContent[key].active
				uni.showActionSheet({
					itemList:item,
					success: async (res) => {
						this.userset[key] = res.tapIndex
						this.SetContent[key].active=!this.SetContent[key].active
						console.log(this.userset)
						let result = await this.$requests.editHealthInfo(this.userset)
						console.log(result)
					},
					fail: () => {
						item.active = !item.active
					}
				})
			},
			async getUserBasicInfo() {
				let result = await this.$requests.getUserBasicInfo()
				console.log(result.data)
				if (result.code == 1000) {
					// 等写完接口
					this.usernameEamil.email=result.data.email
					this.userset[0]=[result.data]
					console.log(this.userset[0])
					// for(let item in result.data){
					// 	this.userset.forEach((item)=>{
					// 		item
					// 	})
					// }
				}
			},
			SetUsernameEamilCpt(name) {
				console.log(name)
				console.log(event.target._value)
				this.newNameEmail[name] = event.target._value
				this.usernameEamil = this.newNameEmail
			},
			async logOut() {
				let result = await this.$requests.getHeartHistory()
				console.log(result)
				// localStorage.removeItem('uaa_token')
				// uni.navigateTo({
				// 	url:'/pages/start/start'
				// })

			},
			// 写头像选择
			selectImg() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						console.log(JSON.stringify(res.tempFilePaths))
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.head {
		width: 750rpx;
		display: flex;
		align-items: center;
		height: 200rpx;
	}

	.head .headContent {
		font-weight: 800;
		font-size: 50rpx;
	}

	.userInfoSetting {
		width: 650rpx;
		margin: 0 auto;
	}

	.userInfoSetting .userEssInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.userInfoSetting .userEssInfo .userImg {
		width: 150rpx;
		height: 150rpx;
	}

	.userInfoSetting .userEssInfo .userImg>img {
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}

	.usernameEamil {
		height: 150rpx;
		width: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #999;
	}

	.usernameEamil>view:nth-child(1) {
		font-size: 40rpx;
	}

	.userAccount {
		margin-top: 70rpx;
	}

	.userAccountItem {
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-left: 0.1rem solid #e5e5e5;
		border-right: 0.1rem solid #e5e5e5;
		border-bottom: 0.1rem solid #e5e5e5;
		width: 100%;
		height: 150rpx;

	}

	.userAccountItem:first-child {
		border-top: 0.1rem solid #e5e5e5;
		border-radius: 1rem 1rem 0 0;
	}

	.userAccountItem:last-child {
		border-radius: 0 0 1rem 1rem;
	}

	.userAccountImg {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(to bottom right, #9faabf, #74819d);
		border-radius: 100%;
	}

	.userAccountImg>img {
		width: 50%;
		height: 50%;
	}

	.userAccountContent {
		width: 380rpx;
	}

	.userAccountContent view:nth-child(2) {
		font-size: 20rpx;
		color: #999;
	}

	.userAllInfo {
		margin-top: 30rpx;
	}

	.userAllInfoItem {
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-left: 0.1rem solid #e5e5e5;
		border-right: 0.1rem solid #e5e5e5;
		border-bottom: 0.1rem solid #e5e5e5;
		width: 100%;
		height: 80rpx;
	}

	.userAllInfoItem:first-child {
		border-top: 0.1rem solid #e5e5e5;
		border-radius: 1rem 1rem 0 0;
	}

	.userAllInfoItem:last-child {
		border-radius: 0 0 1rem 1rem;
	}

	.userAllInfoTitle {
		width: 300rpx;
	}

	.userAllInfoContent {
		width: 250rpx;
		display: flex;
		white-space: nowrap;
		justify-content: flex-end;
		color: #999;
		font-size: 30rpx;
		margin-right: 0.3rem;
	}

	.logOut {
		margin-top: 80rpx;
	}

	.logOut>button {
		color: white;
		background-color: #7f6df2;
		border-radius: 20rpx;
	}

	.formItem {
		width: 700rpx;
		height: auto;
		margin: 30rpx auto;
		
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
	.EmailCodeBtn {
		font-size: 20rpx;
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
	
	.submitBtn {
		width: 500rpx;
		color: white;
		background-color: #7f6df2;
		border-radius: 20rpx;
		margin-bottom: 30rpx;
	}
</style>