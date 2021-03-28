<!--
 * @Author: jweboy
 * @Date: 2021-01-24 15:44:11
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-28 23:08:30
-->
<template>
  <view class="health-item">
    <text class="black-text">{{index}}</text>
    <view class="left">
      <image mode="scaleToFill" class="thumb" :src="data.avatar" />
      <text class="black-text">{{data.nickName}}</text>
    </view>
    <view class="center">
      <text class="grey-text">打卡{{data.punchDayCount}}天</text>
    </view>
    <view class="right">
      <text class="grey-text">累计收益{{totalAmount}}</text>
    </view>
  </view>
</template>

<script>
import { formatPriceWithUnit } from '@/utils/number'

export default {
  props: ['data', 'index'],
  computed: {
    totalAmount() {
      const { totalAmount } = this.data;
      
      return formatPriceWithUnit(totalAmount);
    }
  },
}
</script>

<style lang="less" scoped>
.health-item {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #E4E4E4;
  .black-text {
    font-size: 14px;
    color: #05070D;
  }
  .grey-text {
    font-size: 12px;
    color: #61698C;
  }
  .left {
    width: 35%;
    display: inline-flex;
    align-items: center;
    .thumb {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
  .center {
    width: 20%;
  }
  .right {
    width: 45%;
  }
}
</style>