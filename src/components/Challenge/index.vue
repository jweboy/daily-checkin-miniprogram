<!--
 * @Author: jweboy
 * @Date: 2021-01-19 21:51:32
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-19 22:37:56
-->
<template>
  <view class="challenge">
    <text class="title">早起挑战赛</text>
    <view class="card">
      <view class="top">
        <text class="subtitle">恭喜获得奖励金</text>
        <text class="desc">本期已有{{data.count}}人报名</text>
        <view class="result">
          <view class="text">{{data.no}}期奖金总额(元)</view>
          <view class="amount">{{data.amount}}</view>
          <view class="text">上期人均分得 {{data.perAmount}} 元</view>
        </view>    
        <view class="action">
          <template v-if="status === 'toBegin'">
            <button class="btn disabled"  @click="onSubmit">
              <text :class="styles.text">6:30-8:30开始打卡</text>
            </button>  
          </template>
        </view>
      </view>
      <view class="bottom">
        <view class="step-title">
          <text>打卡成功后分失败人的钱</text>
        </view>
        <view class="step-thumbs">
          <image :src="require('../../assets/glod.png')" mode="aspectFill" class="thumb" /> 
          <image :src="require('../../assets/clock.png')" class="thumb" /> 
          <image :src="require('../../assets/wallet.png')" class="thumb" />  
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
import styles from './index.less'
import glod from '../../assets/glod.png'

export default {
  props: ['onSubmit'],
  data() {
    return {
      styles,
      status: 'inProgress',
      glod,
      data: {
        count: 23324,
        no: '20201230',
        amount: '23432344',
        perAmount:'3.5',
      }
    }
  }
}
</script>

<style lang="less" scoped>
.challenge {
  margin: 68rpx 60rpx 0 60rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 45px;
    color: #fff;
    text-shadow: 0 3px 0 #6D3DEC;
  }
  .card {
    height: 732rpx;
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
      font-size: 14px;
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
    align-items: center;
    padding: 0 40rpx;
    .btn {
      width: 100%;
      height: 92rpx;
      line-height: 92rpx;
      background-image: linear-gradient(180deg, #FFD73F 0%, #FFCE15 100%);
      box-shadow: 0 4px 0 0 #FF9612, 0 6px 6px 0 rgba(165,7,49,0.50), inset 0 1px 3px 0 #FFF6E6;
      border-radius: 8rpx;
      font-size: 16px;
      &.disabled {
        background-color: #d51f1f;
        color: #ff8fa6;
        background-image: none;
        box-shadow: none;
      }
    }
    .text {
      font-size: 18px;
      color: #AD2102;
    }
    .check-area {
      color: #fff;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 10px;
      .protocol {
        color: orange;
      }
    }
  }
  
}
</style>