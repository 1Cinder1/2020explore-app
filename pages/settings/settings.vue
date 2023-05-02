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
						@confirm="setUsernameEamil=!setUsernameEamil" @blur="SetUsernameEamilCpt('name')"  @input="infoInput">
					<view v-if="!setUsernameEamil">{{usernameEamil.email}}</view>
					<input name="email" v-else style="width: 300rpx;" type="text" :placeholder="usernameEamil.email"
						@confirm="setUsernameEamil=!setUsernameEamil" @blur="SetUsernameEamilCpt('email')">

				</view>
				<view @click="setUsernameEamil=!setUsernameEamil">
					<img src="../../static/user/edit.png" alt="">
				</view>
			</view>
			<view class="userAccount">
				<view class="userAccountItem" v-for="(userAccountItem,index) in user" :key="index">
					<view class="userAccountImg">
						<img :src="userAccountItem.userAccountImg" alt="">
					</view>
					<view class="userAccountContent">
						<view v-for="(userAccountContent,index) in userAccountItem.userAccountContent" :key="index">
							{{userAccountContent}}
						</view>
					</view>
					<view class="userAccountSet" @click="changeUserAccount(userAccountItem)">
						<img v-if="!userAccountItem.active" style="width: 50rpx;" src="../../static/user/rightarrow.png"
							alt="">
						<img v-else style="width: 50rpx;" src="../../static/user/downarrow.png" alt="">
					</view>
				</view>
			</view>
			<view class="userAllInfo">
				<view class="userAllInfoItem" v-for="(userAllInfoItem,index) in userset" :key="index">
					<view class="userAllInfoTitle">
						{{userAllInfoItem.name}}
					</view>
					<view style="display: flex;align-items: center;width: 300rpx;justify-content: flex-end;">
						<view class="userAllInfoContent">
							{{userAllInfoItem.nowContent}}
						</view>
						<view v-if="userAllInfoItem.isSet" class="userAllInfoSet"
							@click="changeUserAllInfo(userAllInfoItem)">
							<img v-if="!userAllInfoItem.active" style="width: 50rpx;" src="../../static/user/rightarrow.png"
								alt="">
							<img v-else style="width: 50rpx;" src="../../static/user/downarrow.png" alt="">
						</view>
					</view>
				</view>
			</view>
			<view class="logOut">
				<button @click="logOut">Log Out</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				userset: [{
						name: "Phone",
						nowContent: "13011221122",
						SetContent: ["13011221122"],
						isSet: false,
						active: false
					},
					{
						name: "race",
						nowContent: 'Asian',
						SetContent: ['American Indian/Alaskan Native',
							'Asian',
							'Black',
							'Hispanic',
							'Other',
							'White',
						],
						isSet: true,
						active: false
					},
					{
						name: "age",
						nowContent: '20',
						SetContent: ['20'],
						isSet: false,
						active: false
					},
					{
						name: "gender",
						nowContent: 'Male',
						SetContent: ['Female', 'Male'],
						isSet: true,
						active: false
					},
					{
						name: "smoking statue",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "ever married",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "work type",
						nowContent: 'Private',
						SetContent: ['Govt_job',
							'Private',
							'Self-employed',
							'children',
							'Never_worked',
						],
						isSet: true,
						active: false
					},
					{
						name: "residence type",
						nowContent: 'Urban',
						SetContent: ['Rural', 'Urban'],
						isSet: true,
						active: false
					},
					{
						name: "asthma",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "kidey disease",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true
					},
					{
						name: "skin cancer",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "heart disease",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "alcohol drinking",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "diabetic",
						nowContent: 'Yes',
						SetContent: ['Yes', 'No'],
						isSet: true,
						active: false
					},
					{
						name: "general health",
						nowContent: 'Excellent',
						SetContent: ['Excellent',
							'Fair',
							'Good',
							'Poor',
							'Very good',
						],
						isSet: true,
						active: false
					},
				]
			}
		},
		methods: {
			infoInput(e){
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
			changeUserAllInfo(item) {
				item.active = !item.active
				uni.showActionSheet({
					itemList: item.SetContent,
					success: (res) => {
						item.nowContent = item.SetContent[res.tapIndex]
						item.active = !item.active
					},
					fail: () => {
						item.active = !item.active
					}
				})
			},
			SetUsernameEamilCpt(name) {
				console.log(name)
				console.log(event.target._value)
				this.newNameEmail[name] = event.target._value
				this.usernameEamil = this.newNameEmail
			},
			logOut() {
			},
			// 写头像选择
			selectImg(){
				uni.chooseImage({
					count:1,
					success: (res) => {
						console.log(JSON.stringify(res.tempFilePaths))
					}
				})
			}
		}
	}
</script>

<style>
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
</style>