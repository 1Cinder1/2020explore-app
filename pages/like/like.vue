<template>
	<view style="position: relative;padding: 0rpx 30rpx;">
		<navAside v-show="navShow"></navAside>
		<view class="close-btn" v-show="navShow" @click="closeNav">
			<u-icon name="close" color="#fff" size="20"></u-icon>
		</view>
		<view class="box" id="box">
			<!-- 自定义导航栏 -->
			<view class="navBarBox">
				<!-- 状态栏占位 -->
				<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
				<!-- 真正的导航栏内容 -->
				<view class="navBar">
					<u-image @click="showNav" src="../../static/icon/nav-nav.png" width="26" height="26"></u-image>
					<navigator url="../dataInput/dataInput">
						<u-image src="../../static/icon/nav-add.png" width="26" height="26"></u-image>
					</navigator>
				</view>
			</view>
			<view class="categroy">
				<view style="flex: 1;" :class="showModel == 0 ? 'show-model':''" @click="function(){showModel =0}">All</view>
				<view style="flex: 1;" :class="showModel == 1 ? 'show-model':''" @click="function(){showModel =1}">Stroke</view>
				<view style="flex: 2;" :class="showModel == 2 ? 'show-model':''" @click="function(){showModel =2}">HeartDisease</view>
				<view style="flex: 2;" :class="showModel == 3 ? 'show-model':''" @click="function(){showModel =3}">Medicine</view>
			</view>
			<history style="margin-top: 20rpx;" imageSrc ="../../static/card/card.png" title = "How I Hacked Into Apple,Microsoft and Dozens " date="2021.11.11"></history>
		</view>
	</view>
</template>

<script>
	import navAside from '../../components/navAside'
	import history from '../../components/history'
	export default {
		components: {
			navAside,
			history
		},
		data() {
			return {
				navShow: false,
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82 + 11,
				//显示All Stroke  HeartDisease Medicine中的一个
				showModel:0,
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		methods: {
			showNav() {
				this.navShow = true
				var right = 0
				var box = document.getElementById("box");
				box.style.transform = 'scale(0.7,0.7)'
				box.style.backgroundColor = '#fff'
				box.style.position = 'absolute'
				box.style.zIndex = 2
				box.style.borderRadius = '20px'
				box.style.pointerEvents = 'none'
				var timer = setInterval(() => {
					if (right <= -200) {
						clearInterval(timer)
					} else {
						right -= 20
						box.style.right = right + 'px'
					}
				}, 10)
			},
			closeNav() {
				this.navShow = false
				var scale = 0.7
				var box = document.getElementById("box");
				box.style.backgroundColor = '#ecebed'
				box.style.position = 'initial'
				box.style.right = '0'
				box.style.borderRadius = '0'
				box.style.pointerEvents = 'initial'
				var timer = setInterval(() => {
					if (scale >= 0.9) {
						clearInterval(timer)
					} else {
						scale += 0.1
						box.style.transform = `scale(${scale},${scale})`
					}
				}, 10)
			}

		}
	}
</script>

<style>
	.box {
		width: 100%;
		height: 95vh;
	}
	.close-btn {
		position: absolute;
		z-index: 3;
		width: 30px;
		height: 30px;
		top: 30px;
		left: 10px;
	}

	.navBarBox {}

	.navBarBox .statusBar {}

	.navBarBox .navBar {
		padding: 3rpx 50px 20rpx 20rpx;
		padding-bottom: 22rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.navBarBox .statusBar {}
	.navBarBox .navBar {
		padding: 3rpx 50px 20rpx 20rpx;
		padding-bottom: 22rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.categroy {
		width: 100%;
		height: 80rpx;
		/* background-color: antiquewhite; */
		display: flex;
		flex-direction: row;
	}
	.categroy view {
		/* color: rgb(139, 140, 143); */
		font-family: Inter;
		font-size: 32rpx;
		font-weight: 100;
		line-height: 24px;
		/* background-color: black; */
		border-radius: 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.show-model {
		background-color: black;
		font-weight: 500;
		font-size: 32rpx;
		color: white;
	}
</style>
