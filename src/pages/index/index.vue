<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:47:57
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-28 23:07:58
-->
<template>
	<view>
		<button @getuserinfo="getUserInfo" openType="getUserInfo" class="btn" type="success">微信登陆</button>
	</view>
</template>

<script>

import { asyncGetLoginCode, asyncGetUserInfo } from '@/api/weixin';
import { postAppletLogin } from '@/api/applet';

let timer = 0;

export default {
	data() {
		return {}
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
    // 获取当前用户信息
    getUserInfo: async (evt) => {
      const { jsCode } = uni.getStorageSync('loginCode');
      // const { iv, encryptedData } = await asyncGetUserInfo();
			 const { iv, encryptedData } = evt.detail; 
			//  console.log(evt.detail)
      const { userToken, refreshToken } = await postAppletLogin({
        encryptedData,
        ivStr: iv,
        jsCode,
        accountType: 'PUNCH_APPLET'
      });
      // uni.setStorageSync('token', { userToken, refreshToken });
   },
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
