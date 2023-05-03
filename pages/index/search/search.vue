<template>
	<view class="all" style="position: absolute;top: 0;background-color: #ecebed;">
		<view class="head">
		<uni-icons class="back" style="font-size: 100rpx;" type="left" @click="changeShow"></uni-icons>
		<input v-model='searchContent' class="searchIpt" @confirm="getSearchContent" type="text" :focus="isfocus">
		</view>
		
		<view class="list">
		<scroll-view  scroll-y="true" scroll-with-animation style="height:1450rpx;">
		<view class="list-item" @click="toArticle(item.articleId)" v-for="(item,index) in ArticleList" :key="index">
			<view class="left">
				<img src="../../../static/card/stroke.png" alt="">
			</view>
			<view class="right">
				<view class="content">
					How I Hacked Into Apple,
					Microsoft and Dozens
				</view>
				<view class="data">
					<view class="">
						<img src="../../../static/icon/eye.png" alt=""> 356
					</view>
					<view class="">
						<img src="../../../static/icon/eye.png" alt=""> 341
					</view>
					<view class="">
						<img src="../../../static/icon/like.png" alt=""> 315
					</view>
				</view>
				<view class="time">
					Sep, 11 2020
				</view>
			</view>
		</view>
		</scroll-view>
		</view>
	
		
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import {debounce} from '@/util/debounce.js'
	export default {
		data() {
			return {
				searchContent:'',
				isfocus:false
			}
		},
		mounted(){
			this.getArticleList()
			this.isfocus=true
		},
		methods: {
			async getArticleList(){
				try{
					let result=await this.$store.dispatch('getArticleList')
				}catch(e){
					//TODO handle the exception
					alert(e.message)
				}
			},
			getSearchContent(e){
				this.searchContent=e.detail.value
				console.log(e.detail.value)
			},
			changeShow(){
				// #ifdef H5
				this.$parent.$parent.isShowSearch=false
				// #endif
				this.$parent.isShowSearch=false
				this.searchContent=''
			},
			async toArticle(id){
				console.log(id)
				let result=await this.$requests.getArticleAdd(id*1)
				if(result.code==1000){
					uni.navigateTo({
						url:'/pages/article/article'
					})
				}
			}
		},
		computed:{
			...mapState({
				ArticleList:state=>state.articleList.articleList
			})
			
		}
	}
</script>

<style>
	page{
		height: 100%;
		overflow: hidden;
	}
.head{
	display: flex;
	align-items: flex-end;
	width: 750rpx;
	z-index: 999;
	margin-top: 50rpx;
	padding: 20rpx 0; 
	background-color: #ecebed;
}
.searchIpt{
	width: 600rpx;
	height: 90rpx;
	background-color: white;
	border-radius: 30rpx;
}
.list{
	animation: show 1.4s  ;
}
.list-item{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20rpx auto;
	padding: 30rpx;
	background-color: white;
	border-radius: 30rpx;
	width: 650rpx;
}
.list-item .right{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 30rpx;
	font-size: 25rpx;
}
.list-item .right .data{
	display: flex;
	margin: 20rpx 0;
	justify-content: space-between;
	color: rgb(88, 88, 88);
	width: 350rpx;
}
@keyframes show {
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
</style>
