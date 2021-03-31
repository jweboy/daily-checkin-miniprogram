<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:47:57
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-31 21:17:08
-->
<template>
	<view class="container">
		<view class="header">
			<image :src="logo" mode="aspectFit" class="logo" />
		</view>
		<button @getuserinfo="getUserInfo" openType="getUserInfo" class="btn" type="success">微信登陆</button>
	</view>
</template>

<script>

import { asyncGetLoginCode, asyncGetUserInfo, asyncCheckSession } from '@/api/weixin';
import { postAppletLogin } from '@/api/applet';
import { showErrorMsg, showSuccessMsg } from '../../utils/global'
import logo from '../../static/logo.png'

let timer = 0;

export default {
	data() {
		return {
			logo,
		}
	},
	async mounted() {
		const token = uni.getStorageSync('token');
		const pageUrl = '/pages/test-pay/index'
		
		if(token) {
			// uni.navigateTo({ url: pageUrl });
		} else {
			// 首先获取到登陆的 code 并存储到本地
			// this.getLoginCodeToStore();
			const { code } = await asyncGetLoginCode();
      uni.setStorageSync('loginCode', {
        jsCode: code,
        timestamp: +new Date(),
      })
			this.getUserInfo();
			// 其次开启执行队列隔五分钟更新一次 code 值 (登陆返回的 code 有效期是五分钟)
			timer = setInterval(this.getLoginCodeToStore, 5 * 60 * 1000);
			// uni.navigateTo({ url: pageUrl });
		}
	},
	destroyed() {
    clearInterval(timer);
    timer = 0;
  },
	methods: {
		// 获取登陆返回的 code
    getLoginCodeToStore: async () => {
      const { code } = await asyncGetLoginCode();
      uni.setStorageSync('loginCode', {
        jsCode: code,
        timestamp: +new Date(),
      })
    },
		asyncRelogin: async () => {
			const { jsCode } = uni.getStorageSync('loginCode');
			const { iv, encryptedData } = await asyncGetUserInfo();
			const { userToken, refreshToken } = await postAppletLogin({
				encryptedData,
				ivStr: iv,
				jsCode,
				accountType: 'PUNCH_APPLET'
			});
			uni.setStorageSync('token', { userToken, refreshToken });
		},
    // 获取当前用户信息
    async getUserInfo() {
			const token = uni.getStorageSync('token');
			try {
				await asyncCheckSession();
				if(!token) {
					await this.asyncRelogin();
				}

				showSuccessMsg('登陆成功');
				setTimeout(() => {
					uni.navigateTo({ url: '/pages/test-pay/index' });
				}, 300);
			} catch(err) {
				this.asyncRelogin();
			}
   },
	}
}
</script>

<style>
	.container {
		padding: 16px;
	}

	.header {
		text-align: center;
	}
	
	.logo {
		margin: 100px auto auto auto;
		height: 200rpx;
		width: 200rpx;
		border-radius: 50%;
		background-color: #ccc;
	}

	.btn {
		margin-top: 60px;
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
