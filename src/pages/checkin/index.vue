<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:53:39
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-24 16:45:31
-->
<template>
  <view>
    <!-- <view class="navbar">
      <text>早起打卡</text>
    </view> -->
    <view class="main">
      <challenge />
      <view class="intro">
        奖金到账：打卡当日中午12:00，扣除技术服务0.1%后，保证金与奖金(平分未打卡参与者的保证金)一起转账至您的微信
      </view>
      <view class="headlth">
        <health-list />
      </view>
      <tab-bar />
      <!-- <button @getuserinfo="getUserInfo" open-type="getUserInfo">click me</button> -->
      <!-- <button @click="getUserInfo" open-type="getUserInfo">click me</button> -->
    </view>
  </view>
</template>

<script>
import HealthList from '@/components/HealthList'
import Tabbar from '../../components/Tabbar'
import Challenge from '@/components/Challenge'
import { asyncGetLoginCode, asyncGetUserInfo } from '@/api/weixin'
import { postAppletLogin } from '@/api/applet'

export default {
  components: { Tabbar, HealthList, Challenge },
  data() {
    return {
      count: 2343,
    }
  },
  methods: {
    onSubmit() {
      console.log('object')    
    }
  },
  mounted() {
    // this.firstGetCode();
  },
  methods: {
    async firstGetCode() {
      const { code } = await asyncGetLoginCode()
      uni.setStorageSync('code', {
        jsCode: code,
        timestamp: +new Date().getTime()
      })
      this.startJSCodeHeart()
    },
    startJSCodeHeart() {
      setTimeout(async () => {
        const { code } = await asyncGetLoginCode();
        uni.setStorageSync('code', {
          jsCode: code,
          timestamp: +new Date().getTime()
        })
        this.startJSCodeHeart()
      }, 5 * 60 * 1000)
    },
    async getUserInfo(data) {
      const { encryptedData, iv } = data.detail;
      const { jsCode } = uni.getStorageSync('code');

      console.log(jsCode)
      console.log('1', jsCode, data.detail);
      const { token } = await postAppletLogin({
        encryptedData,
        ivStr: iv,
        jsCode,
        accountType: 'PUNCH_APPLET'
      });

    },
    // async asyncGetUser() {
    //   const { encryptedData, iv } = asyncGetUserInfo();
    //   const { code } = await asyncGetLoginCode();

    //   const { token } = await postAppletLogin({
    //     encryptedData,
    //     ivStr: iv,
    //     jsCode: code,
    //     accountType: 'PUNCH_APPLET'
    //   });
      
    // },
  }
}
</script>

<style lang="less" scoped>
.navbar {
  padding-left: 24rpx;
  height: calc(var(--status-bar-height) + 43px);  
  line-height: 172rpx;
  background-color: transparent;
  color: #fff;
}
.main {
  background-color: #2D15A7;
  background-image: url('http://static.jweboy.com/daily/bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .intro {
    opacity: .75;
    font-size: 10px;
    color: #fff;
    margin: 24rpx 104rpx 0 104rpx;
  }
  .headlth {
    padding: 24rpx 32rpx 52rpx 32rpx;
  }
}
</style>