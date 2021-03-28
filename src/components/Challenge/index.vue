<!--
 * @Author: jweboy
 * @Date: 2021-01-19 21:51:32
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-31 11:24:57
-->
<template>
  <view class="challenge">
    <text class="title">早起挑战赛</text>
    <view class="card" v-if="!!status">
      <view class="top">
        <text class="subtitle" v-if="success">恭喜获得奖励金</text>
        <text class="desc" v-if="signup">本期已有{{info.applyCount}}人报名</text>
        <view class="result">
          <template v-if="success" class="success">
            <view class="success-title">{{info.lastPunchCount}}人挑战成功</view>
            <view>
              <text class="success-amount">{{info.totalAmount}}</text>
              <text class="success-unit">元</text>
            </view>
            <text class="success-tips">奖励金已收入个人账户中，可在【我的】页面中查看</text>
          </template>
          <template v-if="checkinSuccess" class="checkin-success">
            <view class="checkin-success-title">打卡成功</view>
            <view class="checkin-success-checkin">已有{{info.lastPunchCount}}人打卡成功</view>
            <view class="checkin-success-tips">奖励金结算中…</view>
          </template>
          <template v-else>
            <view class="text" v-if="totalBonusOfThisPorid">本期奖金总额(元)</view>
            <view class="text" v-if="totalBonusOfCurrPorid">{{info.activityName}}奖金总额(元)</view>
            <view class="amount" v-if="amount">{{totalAmount}}</view>
            <view class="text"  v-if="perAmount">上期人均分得 {{lastPerAmount}} 元</view>
            <view class="text" v-if="checkin">已有 {{info.lastPunchCount}} 人打卡成功</view>
            <view class="fail" v-if="fail">{{info.activityName}}挑战失败</view>
          </template>
        </view>    
        <view class="action">
          <daily-button :class-name="status === 'toBeginInNextDayByUser' && 'disabled'"  @on-click="onSubmit" :title="btnTitle"/>
          <checkbox-group class="checkbox" v-if="protocol" @change="onProtocolChange">
              <label>
                <checkbox :value="isRead" style="transform:scale(0.5)" />
              </label>
              <label>
                <view>我已阅读并同意 
                  <text class="protocol">《用户协议》</text>
                </view>
              </label>
          </checkbox-group>
        </view>
      </view>
      <view class="bottom">
        <view class="step-title">
          <text>打卡成功后分失败人的钱</text>
        </view>
        <view class="step-thumbs">
          <image :src="require('../../static/glod.png')" mode="aspectFill" class="thumb" /> 
          <image :src="require('../../static/clock.png')" class="thumb" /> 
          <image :src="require('../../static/wallet.png')" class="thumb" />  
        </view> 
        <view class="step-desc">
          <text>支付保证金</text>
          <text>次日5:00~8:30打卡</text>
          <text>12点瓜分奖金</text>
        </view> 
      </view>
    </view>
  </view>
</template>

<script>
import glod from '../../static/glod.png';
import DailyButton from '../Button'
import { formatDecimalPlaces } from '@/utils/number'

export default {
  components: { DailyButton },
  props: ['status', 'info'],
  methods: {
    onProtocolChange() {
      this.isRead = !this.isRead;
    },
    onSubmit() {
      if (!this.isRead) {
        uni.showToast({
          title: '请先勾选用户协议',
          icon: 'none',
          duration: 1000,
        });
        return;
      }
      this.$emit('onSubmit', this.info);
    }
  },
  computed: {
    signup() {
      return this.status !== 'successInNextDayAfterNoonByUser'
    },
    totalBonusOfCurrPorid() {
      return this.status === 'toBegin' || this.status === 'firstEnterByUser' || this.status === 'toBeginInNextDayByUser' ||  this.status === 'firstEnterByNewUser'  || this.status === 'paySuccessInNextDayByUser';
    },
    totalBonusOfThisPorid() {
      return this.status === 'inProgressInNextDayByUser'
    },
    perAmount() {
      return this.status === 'toBegin' || this.status === 'firstEnterByUser' || this.status === 'toBeginInNextDayByUser' || this.status === 'firstEnterByNewUser'  || this.status === 'paySuccessInNextDayByUser';
    },
    checkin() {
      return this.status === 'inProgressInNextDayByUser'
    },
    btnTitle() {
      switch(this.status) {
        // case 'toBegin':
        //   return '我不服，我要赚回保证金';
        case 'firstEnterByUser':
          return '支付2.00元    立即参与';
        case 'inProgressInNextDayByUser':
          return '02:37:30结束  立即打卡';
        case 'failInNextDayByUser':
          return '我不服，我要赚回保证金';
        case 'successInNextDayAfterNoonByUser':
          return '我要继续参加今日赛';
        case 'successInNextDayByUser':
          return '我要继续参加今日赛';
        case 'toBeginInNextDayByUser':
          return '6:30-8:30开始打卡';
        case 'firstEnterByNewUser':
          return '新人支付0.99元参与';
        case 'paySuccessInNextDayByUser':
          return '明日6:30-8:30开始打卡';
        default:
          return '';
      }
    },
    protocol() {
      return this.status === 'firstEnterByUser' || this.status === 'firstEnterByNewUser'
    },
    fail() {
      return this.status === 'failInNextDayByUser'
    },
    amount() {
      return this.status !== 'failInNextDayByUser' && this.status !== 'successInNextDayAfterNoonByUser'
    },
    success() {
      return this.status === 'successInNextDayAfterNoonByUser'
    },
    checkinSuccess() {
      return this.status === 'successInNextDayByUser'
    },
    totalAmount() {
      const { totalAmount } = this.info;
      return formatDecimalPlaces(totalAmount);
    },
    lastPerAmount() {
      const { lastPerAmount } = this.info;
      return formatDecimalPlaces(lastPerAmount);
    }
    // price() {
    //   return this.status === ''
    // }
  },
  data() {
    return {
      // inProgressInNextDayByUser failInNextDayByUser successInNextDayAfterNoonByUser  successInNextDayByUser firstEnterByUser
      // status: '',
      glod,
      isRead: false,
    }
  },
}
</script>

<style lang="less" scoped>
.challenge {
  margin: 264rpx 60rpx 0 60rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 45px;
    color: #fff;
    text-shadow: 0 3px 0 #6D3DEC;
  }
  .card {
    height: 742rpx;
    border: 12rpx solid #FF7F9F;
    background-color: #9E0A3B;
    border-radius: 16rpx;
    .subtitle {
      color: #fff;
      font-size: 16px;
    }
    .desc {
      color: #fff;
      font-size: 14px;
    }
    .top {
      padding-top: 20rpx;
      margin: 12rpx;
      height: 490rpx;
      display: flex;
      flex-direction: column;
      background-image: linear-gradient(180deg, #FF426E 0%, #EB2845 100%);
      border-radius: 16rpx;
    }
    .bottom {
      margin: 12rpx;
      height: 196rpx;
      background: #CD2B44;
      border-radius: 16rpx;
      text-align: center;
      .step {
        &-thumbs {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 8rpx 0;
          .thumb {
            width: 68rpx;
            height: 68rpx;
          }
        }
        &-title {
          padding: 16rpx 0;
          text-align: center;
          font-size: 12px;
          color: #FFBE4C;
        }
        &-desc {
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 12px;
          color: #fffb8f;
          padding: 0 24rpx;

        }
      }
    }
  }
  .result {
    margin-top: 32rpx;
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed #FFFFB8;
    padding: 12px 4px;
    .subtitle {
      font-size: 18px;
      font-weight: 500;
      clear: #fff;
    }
    .success {
      &-title {
        font-size: 12px;
        color: #ffffb8;
      }
      &-amount {
        font-size: 45px;
        color: #ffffb8;
      }
      &-unit {
        font-size: 12px;
        color: #ffffb8;
      }
      &-tips {
        color: #a60c0c;
        font-size: 10px;
      }
    }
    .checkin-success {
      &-title {
        font-size: 32px;
        color: #ffffb8;
      }
      &-checkin {
        margin: 16rpx 0;
        font-size: 12px;
        color: #ffffb8;
      }
      &-tips {
        color: #ffffff;
        font-size: 16px;
      }
    }
    .fail {
      color: #fff;
      font-size: 16px;
    }
    .desc {
      font-size: 14px;
      color: #fff;
    }
    .amount {
      font-weight: 500;
      font-size: 32px;
      color: #FFFFB8;
    }
    .text {
      font-size: 12px;
      color: #FFFFB8;
    }
    .tips {
      font-size: 12px;
      color: #FFFFB8;
    }
  }
  .action {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 40rpx;
    flex-direction: column;
    .checkbox {
      color: #fff;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20rpx;
      .protocol {
        color: orange;
      }
    }
  }
  
}
</style>