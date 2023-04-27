<template>
	<view style="position: relative;">
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
			<view class="title width center">
				<view>
					Find your own
				</view>
				<view>
					health information
				</view>
			</view>

			<view class="search">
				<u-search placeholder="Search" :showAction="false" inputAlign="left" height="50" v-model="searchValue"
					@search="search"></u-search>
			</view>

			<view class="kind width center">
				<view class="kind-item" v-for="item in kindList" :key="item.id" @click="changeActive(item.id)">
					{{item.name}}
				</view>
			</view>

			<view class="daily" v-show="selected == 0">
				<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab width center">
					<view class="card">
						<navigator url="" hover-class="none">
							<view class="pic">
								<img src="../../static/card/card.png" alt="">
							</view>
							<view class="text-one">
								Eybisi Salad Mix
							</view>
							<view class="text-two">
								Mix vegetables inggridients
							</view>
							<view class="time">
								4/23
							</view>
						</navigator>
					</view>
					<view class="card">
						<navigator url="" hover-class="none">
							<view class="pic">
								<img src="../../static/card/card.png" alt="">
							</view>
							<view class="text-one">
								Eybisi Salad Mix
							</view>
							<view class="text-two">
								Mix vegetables inggridients
							</view>
							<view class="time">
								4/23
							</view>
						</navigator>
					</view>
					<view class="card">
						<navigator url="" hover-class="none">
							<view class="pic">
								<img src="../../static/card/card.png" alt="">
							</view>
							<view class="text-one">
								Eybisi Salad Mix
							</view>
							<view class="text-two">
								Mix vegetables inggridients
							</view>
							<view class="time">
								4/23
							</view>
						</navigator>
					</view>
				</scroll-view>
			</view>

			<view class="daily" v-show="selected == 1">
				<view class="list width center">
					<view class="list-item">
						<view class="left">
							<img src="../../static/card/stroke.png" alt="">
						</view>
						<view class="right">
							<view class="content">
								How I Hacked Into Apple,
								Microsoft and Dozens
							</view>
							<view class="data">
								<view class="">
									<img src="../../static/icon/eye.png" alt=""> 356
								</view>
								<view class="">
									<img src="../../static/icon/collect.png" alt=""> 341
								</view>
								<view class="">
									<img src="../../static/icon/like.png" alt=""> 315
								</view>
							</view>
							<view class="time">
								Sep, 11 2020
							</view>
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<img src="../../static/card/stroke.png" alt="">
						</view>
						<view class="right">
							<view class="content">
								How I Hacked Into Apple,
								Microsoft and Dozens
							</view>
							<view class="data">
								<view class="">
									<img src="../../static/icon/eye.png" alt=""> 356
								</view>
								<view class="">
									<img src="../../static/icon/eye.png" alt=""> 341
								</view>
								<view class="">
									<img src="../../static/icon/like.png" alt=""> 315
								</view>
							</view>
							<view class="time">
								Sep, 11 2020
							</view>
						</view>
					</view>
					<view class="list-item">
						<view class="left">
							<img src="../../static/card/stroke.png" alt="">
						</view>
						<view class="right">
							<view class="content">
								How I Hacked Into Apple,
								Microsoft and Dozens
							</view>
							<view class="data">
								<view class="">
									<img src="../../static/icon/eye.png" alt=""> 356
								</view>
								<view class="">
									<img src="../../static/icon/eye.png" alt=""> 341
								</view>
								<view class="">
									<img src="../../static/icon/like.png" alt=""> 315
								</view>
							</view>
							<view class="time">
								Sep, 11 2020
							</view>
						</view>
					</view>

				</view>
			</view>

			<view class="daily" v-show="selected == 2">

			</view>

			<view class="daily" v-show="selected == 3">

			</view>

		</view>
	</view>

</template>

<script>
	import navAside from '../../components/navAside'
	export default {
		components: {
			navAside
		},
		data() {
			return {
				navShow: false,
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82 + 11,
				percent: 71.094,
				searchValue: '',
				kindList: [{
					'id': 0,
					'name': 'Daily',
				}, {
					'id': 1,
					'name': 'Stroke',
				}, {
					'id': 2,
					'name': 'Heart Disease',
				}, {
					'id': 3,
					'name': 'Medicine',
				}],
				selected: 0,
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		mounted() {
			var item = document.querySelector('.kind-item');
			item.classList.add('active')
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
			},
			search() {
				console.log(1)
			},
			changeActive(id) {
				let arr = document.querySelectorAll('.kind-item')
				for (var i = 0; i < arr.length; i++) {
					arr[i].classList.remove('active')
				}
				arr[id].classList.add('active')
				this.selected = id
			}
		}
	}
</script>

<style scoped>
	.box {
		height: 95vh;
		width: 100vw;
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

	.title {
		color: rgb(32, 31, 32);
		font-family: Inter;
		font-size: 30px;
		font-weight: 700;
		line-height: 36px;
	}

	.search {
		margin-top: 20px;
		width: 85%;
		margin-left: 2.5%;
	}

	.kind {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		color: rgb(136, 136, 136);
		font-family: DM Sans;
		font-size: 16px;
		font-weight: 400;
		line-height: 21px;
	}

	.kind .item {
		width: 20%;
	}

	.active {
		color: rgb(0, 0, 0);
		font-family: DM Sans;
		font-size: 20px;
		font-weight: 400;
		line-height: 6px;
		border-bottom: 2px solid #000;
	}

	.scroll-tab {
		margin-top: 20px;
		white-space: nowrap;
	}

	.card {
		display: inline-block;
		margin-left: 10px;
	}

	.card:first-child {
		margin-left: 0;
	}

	.scroll-tab .card {
		padding: 12px;
		border-radius: 10px;
		background-color: #fff;
	}

	.card .pic img {
		border-radius: 12px;
	}

	.card .text-one {
		color: rgb(32, 31, 32);
		font-family: Inter;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		margin: 5px 0;
	}

	.card .text-two {
		opacity: 0.7;
		color: rgb(32, 31, 32);
		font-family: Inter;
		font-size: 10px;
		font-weight: 100;
		line-height: 20px;
		margin: 5px 0;
	}

	.card .time {
		color: rgb(32, 31, 32);
		font-family: Inter;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
	}

	.list {
		margin-top: 20px;
	}

	.list .list-item {
		padding: 20px;
		background-color: #fff;
		border-radius: 20px;
		display: flex;
		margin-bottom: 10px;
	}

	.list .list-item .left {
		text-align: center;
		margin-right: 10px;
	}

	.list .list-item .right {}

	.list .list-item .right .content {
		color: rgb(88, 88, 88);
		font-family: DM Sans;
		font-size: 14px;
		font-weight: 500;
		line-height: 18px;
	}

	.list .list-item .right .data {
		display: flex;
		margin: 10px 0;
		color: rgb(88, 88, 88);
		font-family: DM Sans;
		font-size: 10px;
		font-weight: 400;
		line-height: 13px;
	}

	.list .list-item .right .data view {
		margin-right: 20px;
	}

	.list .list-item .right .data view img {
		margin-right: 5px;
		width: 12px;
		height: 10px;
	}

	.list .list-item .right .time {
		color: rgb(136, 136, 136);
		font-family: DM Sans;
		font-size: 9px;
		font-weight: 400;
		line-height: 12px;
	}
</style>