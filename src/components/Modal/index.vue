<!--
 * @Author: jweboy
 * @Date: 2021-01-31 12:55:14
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-31 15:03:48
-->
<template>
  <view class="mask" v-if="visible">
    <view class="modal" ref="modal">
      <text class="close" @click="hide">close</text>
      <view class="content">
        <slot name="content"></slot>
      </view>
      <view class="footer">
        <slot name="footer"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  watch: {
    visible(val, oldVal) {
      console.log(val, oldVal)
    }
  },
  data() {
    return {
      visible: false,
    }
  },
  show() {
    console.log('show')
    this.visible = true;
  },
  hidden() {
    this.visible = false;
  }
}
</script>

<style lang="less" scoped>
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600rpx;
  min-height: 600rpx;
  // padding: 36rpx;s
  background-color: #fff;
  border-radius: 8rpx;
  .close {
    position: absolute;
    right: 36rpx;
    top: 36rpx;
  }
  .content {
    margin: 72rpx 72rpx 16rpx 72rpx;
  }
  .footer {
    border-top: 1px solid #e4e4e4;
    padding: 28rpx 36rpx;
  }
}
.mask {
  background-color: rgba(0, 0, 0, .45);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>