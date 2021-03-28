<!--
 * @Author: jweboy
 * @Date: 2021-01-29 11:17:29
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-29 22:45:31
-->
<template>
  <view class="join-record-item">
    <view class="left">
      <view class="periods">{{record.activityId}}期</view>
      <view class="time">报名时间：{{record.registerTime}}</view>
    </view>
    <view class="right">
      <view :class="['status', 'status__' + record.status]"> {{status}}</view>
      <view class="time" v-if="record.status === 'fail'">{{record.punchTime}}打卡</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['record'],
  computed: {
    status() {
      const { status } = this.record;
      const statusMap = {
        success: '成功',
        fail:  '失败'
      }

      return `打卡${statusMap[status]}`
    }
  }
}
</script>

<style lang="less" scoped>
.join-record-item {
  padding: 36rpx 30rpx;
  background-color: #fff;
  border-bottom: solid 1px #e4e4e4;
  display: flex;
  justify-content: space-between;
  .left, .right {
    display: inline-flex;
    flex-direction: column;
    .periods {
      font-size: 14px;
    }
    .time {
      font-size: 12px;
      color: #9096ad;
    }
    .status {
      font-size: 14px;
      &__fail {
        color: #262a38;
      }
      &__success {
        color: #f9541e;
      }
    }
  }
}
</style>