<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	html,
	body {
		background-color: #ecebed;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.center {
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.width {
		width: 95%;
	}

	.box {
		padding-top: 20px;
	}
</style>