<!--
 * @Author: jweboy
 * @Date: 2021-01-05 20:44:23
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-09 15:08:31
-->
<template>
  <view :class="styles.person">
    <view :class="styles.detail">
      <image :class="styles.avatar" src="/static/logo.png"></image>
      <view :class="styles.info">
        <text :class="styles.username">小叮叮</text>
        <text :class="styles.desc">已坚持12天 健康达标率76.54%</text>
      </view>
    </view>
    <!-- <view :class="styles.amount">
      <view :class="styles.balance">
        <text :class="styles.text">账户余额</text>
        <text :class="styles.price">1243.7</text>
        <text :class="styles.unit">元</text>
        <button :class="styles.withdraw">提现</button>
      </view>
      <view :class="styles.income">
        <view :class="styles.item">
          <text :class="styles.label">今日收益</text>
          <text :class="[styles.value, styles['today-amount']]">2.5</text>
          <text :class="styles['today-unit']">元</text>
        </view>
        <view :class="styles.item">
          <text :class="styles.label">累计收益</text>
          <text :class="styles['total-amount']">1248.5</text>
          <text>元</text>
        </view>
      </view> 
    </view>-->
    <view :class="styles.tips">每日收益将于12:00结算到账</view>
    <Tabs />
  </view>
</template>

<script>
import Tabs from '@/components/Tabs'
import styles from './index.less';


export default {
  components: { Tabs },
  data() {
    return {
      styles
    }
  }
}
</script>
