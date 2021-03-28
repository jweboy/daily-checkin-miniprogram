<template>
	<view class="content">
		<view style="height: 100rpx;"></view>
		<button type="primary" @click="confirm({showCancel:true})">confirm提示</button>
		<view style="height: 100rpx;"></view>
		<button type="warn" @click="alert({showCancel:false})">alert提示</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			async alert(options) {
				await this.showModal(options);
				uni.showToast({
					title: "你点击了确定按钮",
					position: "bottom"
				})
			},
			async confirm(options) {
				try{
					await this.showModal(options);
					uni.showToast({
						title: "你点击了确定按钮",
						position: "bottom"
					})
				}catch(e){
					uni.showToast({
						title: "你点击了取消按钮",
						position: "bottom"
					})
				}
			},
			showModal(options) {
				let params = {
					title: "提示",
					content: "自定义内容", 
					align: "center", // 对齐方式 left/center/right
					cancelText: "取消", // 取消按钮的文字
					cancelColor: "#8F8F8F", // 取消按钮颜色
					confirmText: "确定", // 确认按钮颜色
					confirmColor: "#FFAD15", // 确认按钮颜色 
					showCancel: true, // 是否显示取消按钮，默认为 true
				}
				
				Object.assign(params, options)
				
				let list = []
				Object.keys(params).forEach(ele => {
					list.push(ele + "=" + params[ele])
				})
				let paramsStr = list.join('&')
				
				uni.navigateTo({
					url: "/pages/modal/modal?" + paramsStr
				})
				
				return new Promise((resolve, reject) => {
					uni.$once("AppModalCancel", () => {
						reject()
					})
					uni.$once("AppModalConfirm", () => {
						resolve()
					})
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
