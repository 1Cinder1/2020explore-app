<template>
	<view style="position: relative;">
		<navAside v-show="navShow"></navAside>
		<view class="close-btn" v-show="navShow" @click="closeNav">
			<u-icon name="close" color="#fff" size="20"></u-icon>
		</view>
		<view class="box" ref="box" id="box" :style="isStyle ? style[0]:style[1]">
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
			<view style="height: 345px;">
			<view class="title width center">
				<view class="en">
					Current stroke probability
				</view>
				<view class="num">
					{{strokePercent}}%
				</view>
			</view>
			<view class="pic">
				<l-echart ref="chart1" @finished="init1"></l-echart>
			</view>
			</view>
			<view>
			<view class="title width center">
				<view class="en">
					Current heart probability
				</view>
				<view class="num">
					{{heartPercent}}%
				</view>
			</view>
			<view class="pic">
				<l-echart ref="chart2" @finished="init2"></l-echart>
			</view>
			</view>
			<view class="index width center">
				Health Index
			</view>
			<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab width center">
				<view class="card">
					<navigator url="../glucose/glucose" hover-class="none">
						<view class="top">
							<view class="icon">
								<img src="../../static/icon/heart.png" alt="">
							</view>
							<view class="text">
								<view class="">
									Glucose
								</view>
								<view class="">
									23/4/3
								</view>
							</view>
						</view>
						<view class="line">
							<img src="../../static/icon/line.png" alt="">
						</view>
						<view class="data">
							{{avgGlucoseLevelAverage.length==0 ? "0":avgGlucoseLevelAverage}}mmol/L
						</view>
						<view class="bottom">
							<img src="../../static/icon/up.png" alt="">
							+9.0%
						</view>
					</navigator>
				</view>
				<view class="card">
					<navigator url="../bmi/bmi" hover-class="none">
						<view class="top">
							<view class="icon">
								<img src="../../static/icon/Medico_Bold_Body.png" alt="">
							</view>
							<view class="text">
								<view class="">
									BMI
								</view>
								<view class="">
									23/4/5
								</view>
							</view>
						</view>
						<view class="line">
							<img src="../../static/icon/line.png" alt="">
						</view>
						<view class="data">
							19.5
						</view>
						<view class="bottom">
							<img src="../../static/icon/up.png" alt="">
							+1.4%
						</view>
					</navigator>
				</view>
				<view class="card">
					<navigator url="" hover-class="none">
						<view class="top">
							<view class="icon">
								<img src="../../static/icon/24-hours-line.png" alt="">
							</view>
							<view class="text">
								<view class="">
									SleepTime
								</view>
								<view class="">
									23/4/3
								</view>
							</view>
						</view>
						<view class="line">
							<img src="../../static/icon/line.png" alt="">
						</view>
						<view class="data">
							9.7h
						</view>
						<view class="bottom">
							<img src="../../static/icon/up.png" alt="">
							+21.3%
						</view>
					</navigator>
				</view>

			</scroll-view>
		</view>
	</view>

</template>

<script>
	import {mapState} from 'vuex'
	import navAside from '../../components/navAside'
	import * as echarts from 'echarts'
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
				strokePercent: 71.094,
				heartPercent: 71.094,
				strokeOption: {
					xAxis: {
						data: ['4-20', '4-19', '4-18', '4-17', '4-16']
					},
					yAxis: {
						position: 'right'
					},
					series: [{
						type: 'candlestick',
						data: [
							[20, 34, 10, 38],
							[40, 35, 30, 50],
							[31, 38, 33, 44],
							[38, 15, 5, 42],
							[31, 38, 33, 44]
						]
					}]
				},
				heartOption: {
					xAxis: {
						data: ['4-20', '4-19', '4-18', '4-17', '4-16']
					},
					yAxis: {
						position: 'right'
					},
					series: [{
						type: 'candlestick',
						data: [
							[15, 30, 9, 44],
							[40, 35, 30, 50],
							[31, 20, 33, 44],
							[38, 15, 5, 42],
							[31, 38, 33, 44]
						]
					}]
				},
				style:[{
					transform :`scale(0.7,0.7)`,
					backgroundColor : '#fff',
					position :'absolute',
					zIndex : 2,
					borderRadius : '20px',
					pointerEvents : 'none',
					right:"0rpx"
				},{
					backgroundColor : '#ecebed',
					position : 'initial',
					right : 0,
					borderRadius :0,
					pointerEvents : 'initial',
				}
				],
				isStyle:false
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		onLoad() {
			this.getStrokePredictHistory()
			this.getHeartPredictHistory()
			this.getAveGlucoseLevelAge()
		},
		methods: {
			async init1() {
				// chart 图表实例不能存在data里
				const chart = await this.$refs.chart1.init(echarts);
				chart.setOption(this.strokeOption)
			},
			async init2() {
				// chart 图表实例不能存在data里
				const chart = await this.$refs.chart2.init(echarts);
				chart.setOption(this.heartOption)
			},
			showNav() {
				this.navShow = true
				var right = 0
				this.isStyle=true
				var timer = setInterval(() => {
					if (right <= -500) {
						clearInterval(timer)
					} else {
						right -= 20
						this.style[0].right = right + 'rpx'
					}
				}, 10)
			},
			closeNav() {
				this.navShow = false
				var scale = 0.7
				this.isStyle=false
				var timer = setInterval(() => {
					if (scale >= 0.9) {
						clearInterval(timer)
					} else {
						scale += 0.1
						this.style[1].transform = `scale(${scale},${scale})`
					}
				}, 50)
			},
			async getStrokePredictHistory(){
				let result = await this.$requests.getStrokePredictHistory()
				if(result.code==5000){
					this.strokePercent=0
				}else{
					this.strokePercent=result.data
				}
			},
			async getHeartPredictHistory(){
				let result = await this.$requests.getHeartPredictHistory()
				if(result.code==5000){
					this.heartPercent=0
				}else{
					this.heartPercent=result.data
				}
				
			},
			async getAveGlucoseLevelAge(){
				await this.$store.dispatch('getHeartHistory')
			}
		},
		computed:{
			...mapState({
				avgGlucoseLevelAverage:state=>state.glucose.avgGlucoseLevelAverage
			})
		}
	}
</script>

<style scoped>
	.box {
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

	.title .en {
		color: rgb(178, 178, 180);
		font-family: Inter;
		font-size: 20px;
		font-weight: 500;
		line-height: 24px;
	}

	.title .num {
		font-family: Inter;
		font-size: 42px;
		font-weight: 700;
		line-height: 51px;
	}

	.pic {
		margin: -30px 0;
	}

	.index {
		color: rgb(178, 178, 180);
		font-family: Inter;
		font-size: 20px;
		font-weight: 500;
		line-height: 24px;
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

	.scroll-tab {}

	.scroll-tab .card {
		padding: 12px;
		border-radius: 10px;
	}

	.scroll-tab .card:nth-child(odd) {
		background-color: rgb(183, 184, 220);
	}

	.scroll-tab .card:nth-child(even) {
		background-color: rgb(183, 221, 210);
	}

	.scroll-tab .card .top {
		display: flex;
		align-items: center;
	}

	.scroll-tab .card .top .icon {
		margin-right: 16px;
	}

	.scroll-tab .card .top .text :first-child {
		color: rgb(26, 33, 49);
		font-family: Inter;
		font-size: 16px;
		font-weight: 600;
		line-height: 19px;
	}

	.scroll-tab .card .top .text :last-child {
		color: rgba(26, 33, 49, 0.4);
		font-family: Inter;
		font-size: 13px;
		font-weight: 500;
		line-height: 16px;
	}

	.scroll-tab .card .data {
		color: rgb(26, 33, 49);
		font-family: Inter;
		font-size: 18px;
		font-weight: 600;
		line-height: 22px;
		margin: 10px 0;
	}

	.scroll-tab .card .bottom {
		padding: 4px 10px 4px 10px;
		background: rgba(26, 33, 49, 0.1);
		border-radius: 100px;
		width: 60%;
		text-align: center;
	}

	.scroll-tab .card img {
		margin-right: 10px;
		box-sizing: border-box;
	}
</style>