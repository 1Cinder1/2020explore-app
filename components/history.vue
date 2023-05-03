<template>
	<view class="main">
		<image :src="imageSrc" class="main-image"></image>
		<view>
			<view class="txt">
				<text>{{title}}</text>
			</view>
			<view>
				<image src="../static/icon/eye.png" mode="widthFix" style="width: 30rpx;margin-left: 44rpx;"></image>
				<text style="margin-left: 10rpx;">{{view}}</text>
				<image src="../static/icon/collect.png" mode="widthFix" style="width: 30rpx;margin-left: 44rpx;"></image>
				<text style="margin-left: 10rpx;">{{collection}}</text>
				<image src="../static/icon/like.png" mode="widthFix" style="width: 30rpx;margin-left: 44rpx;"></image>
				<text style="margin-left: 10rpx;">{{like}}</text>
			</view>
			<text class="date">{{date}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"history",
		data() {
			return {
				
			};
		},
		props: {
			imageSrc:String,
			title:String,
			view: {
				type:Number,
				default:0
			},
			collection: {
				type:Number,
				default:0
			},
			like: {
				type:Number,
				default:0
			},
			date: {
				type:String,
				required:true
			}
		},
		created() {
			console.log(this.imageSrc)
		}
	}
</script>

<style>
	.main{
		width: 100%;
		box-sizing: border-box;
		height: 127px;
		background-color: white;
		border-radius:30px;
		padding-left: 24px;
		display: flex;
		align-items: center;
	}
	.main-image{
		width: 110.92px;
		height: 87px;
	}
	.txt {
		margin-left: 44rpx;
		margin-bottom: 24rpx;
		font-family: DM Sans;
		font-size: 14px;
		font-weight: 500;
		line-height: 18px;
	}
	.date {
		margin-left: 44rpx;
		color: rgb(136, 136, 136);
		font-family: DM Sans;
		font-size: 18rpx;
		font-weight: 400;
		line-height: 24rpx;
	}
</style>