<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:47:57
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-17 18:28:51
-->
<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view> -->
		<check-in />
	</view>
</template>

<script>
	import CheckIn from '../checkin'
	import Person from '../person'
	import Withdrawal from '../withdrawal/result'

	export default {
		components: { Person, Withdrawal, CheckIn },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

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
		margin: 200rpx auto 50rpx auto;
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
