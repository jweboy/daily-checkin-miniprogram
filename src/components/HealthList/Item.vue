<!--
 * @Author: jweboy
 * @Date: 2021-01-24 15:44:11
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-24 16:24:36
-->
<template>
  <view class="health-item">
    <text class="black-text">1</text>
    <view class="left">
      <image mode="scaleToFill" class="thumb" src="https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png" />
      <text class="black-text">玉房</text>
    </view>
    <view class="center">
      <text class="grey-text">打卡3天</text>
    </view>
    <view class="right">
      <text class="grey-text">累计收益2976.67元</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  }
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