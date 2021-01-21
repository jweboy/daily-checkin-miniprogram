<!--
 * @Author: jweboy
 * @Date: 2021-01-03 23:05:21
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-03 23:14:59
-->
<template>
  <view :class="styles['health-item']">
    <text :class="styles['black-text']">1</text>
    <view :class="styles.left">
      <image mode="scaleToFill" :class="styles.thumb" src="https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png" />
      <text :class="styles['black-text']">玉房</text>
    </view>
    <view :class="styles.center">
      <text :class="styles['grey-text']">打卡3天</text>
    </view>
    <view :class="styles.right">
      <text :class="styles['grey-text']">累计收益2976.67元</text>
    </view>
  </view>
</template>

<script>
import styles from './index.less'

export default {
  data() {
    return {
      styles
    }
  }
}
</script>