<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:53:39
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-31 15:09:27
-->
<template>
  <view>
    <view class="main">
      <challenge :status="activityStatus" :info="activityInfo" @onSubmit="onSubmit" />
      <view class="intro">
        奖金到账：打卡当日中午12:00，扣除技术服务0.1%后，保证金与奖金(平分未打卡参与者的保证金)一起转账至您的微信
      </view>
      <view class="headlth">
        <health-list :data="healthRankList" />
      </view>
      <tab-bar />
      <button @getuserinfo="getUserInfo" open-type="getUserInfo" class="btn">获取当前用户信息</button>
    </view>
    <modal ref="modal">
      <template slot="content" class="modal-content">
        <image class="thumb" :src="require('../../static/money.png')" />
        <view class="title">新人首次0.99参与</view>
        <view class="title">次日即可分得2元起的现金</view>
        <view class="subtitle">真的不考虑试试看吗？</view>
      </template>
      <template slot="footer" class="modal-footer">
        <daily-button title="留下报名" class-name="btn" />
        <view class="no-care">算了，不参加</view>
      </template>
    </modal>
  </view>
</template>

<script>
import HealthList from '@/components/HealthList';
import Tabbar from '../../components/Tabbar';
import Challenge from '@/components/Challenge';
import { asyncGetLoginCode, asyncGetUserInfo } from '@/api/weixin';
import { postAppletLogin } from '@/api/applet';
import { getActivityCurrent, getActivityPunchRank } from '@/api/activity';
import { getApplyStatus } from '@/api/apply';
import Modal from '@/components/Modal';
import DailyButton from '@/components/Button'

let timer = 0;

export default {
  components: { Tabbar, HealthList, Challenge, Modal, DailyButton },
  data() {
    return {
      count: 2343,
      healthRankList: [],
      activityStatus: '',
      activityInfo: {},
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.modal.$options.show();
    }, 1000);
    console.log(this.$refs.modal._props)
    // this.getLoginCodeToStore();
    // uni.showModal({
    //   title: '押走了吗',
    //   showCancel: true,
    // })

    // 获取健康打卡榜单列表
    this.asyncGetHealthRankList();
    // 获取当前用户的活动状态
    this.asyncGetActivityStatus();
    // 获取当前用户的活动信息
    this.asyncGetActivityInfo();

    // 开启执行队列更新活动信息
    timer = setInterval(this.asyncGetActivityInfo, 60 * 1000);
  },
  destroyed() {
    clearInterval(timer);
    timer = 0;
  },
  // onUnload() {
 
  // },
  methods: {
    onSubmit(data) {
      console.log(data)
    },
    setActivityStatus(data) {
      data = {
        enableNewUser: false,
        enablePunchDay: true,
        enablePunch: true,
        enableCurrentApply: false,
      }
      let suffix = '';
      let prefix = '';
      let status = '';

      // 新用户首次进入可打卡
      if(data.enableNewUser && data.enablePunch) {
        return 'firstEnterByNewUser';
      }
      // 老用户进入
      if(!data.enableNewUser) {
        suffix = 'User';
        // 首日进入可打卡
        if(!data.enableCurrentApply && data.enablePunch) {
          prefix = 'firstEnter';
        }
        status = prefix + 'By' + suffix;
        return status;
      }
    },
    asyncGetActivityInfo() {
      return getActivityCurrent().then(data => {
        this.activityInfo = data;
      });
    },
    asyncGetActivityStatus() {
      return getApplyStatus().then((data) => {
        this.activityStatus = this.setActivityStatus(data);
        console.log(this.activityStatus)
      });
    },
    asyncGetHealthRankList() {
      return getActivityPunchRank().then((data) => {
        this.healthRankList = data;
      });
    },
  //   // 获取登陆返回的 code
    getLoginCodeToStore: async () => {
      const { code } = await asyncGetLoginCode();
      uni.setStorageSync('loginCode', {
        jsCode: code,
        timestamp: +new Date().getTime(),
      })
    },
    // 获取当前用户信息
    async getUserInfo(data) {
      console.log(data)
      // const { jsCode } = uni.getStorageSync('loginCode');
      const { code } = await asyncGetLoginCode();
      const { iv, encryptedData } = await asyncGetUserInfo();
      const { userToken, refreshToken } = await postAppletLogin({
        encryptedData,
        ivStr: iv,
        jsCode: code,
        accountType: 'PUNCH_APPLET'
      });
      uni.setStorageSync('token', { userToken, refreshToken });
   },
  }
}
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  z-index: 100;
  top: 0;
}
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
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .thumb {
    margin-bottom: 48rpx;
    width: 180rpx;
    height: 120rpx;
  }
  .title {
    color: #262a38;
    font-size: 18px;
  }
  .subtitle {
    margin-top: 24rpx;
    font-size: 14px;
    color: #61698c;
  }
}
.modal-footer {
  .no-care {
    margin-top: 32rpx;
    text-align: center;
    font-size: 28rpx;
    color: #4e5368;
  }
  .modal-btn {
    background-color: #192b80;
  }
}
</style>