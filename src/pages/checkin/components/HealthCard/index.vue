<!--
 * @Author: jweboy
 * @Date: 2021-01-03 20:31:23
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-03 23:14:05
-->
<template>
  <view :class="styles['health-card']">
    <view :class="styles.header">
      <text :class="styles.title">早起打卡健康榜</text>
      <text :class="styles.link">邀请好友&nbsp;&gt;</text>
    </view>
    <health-item />
    <health-item />
    <health-item />
  </view>  
</template>

<script>
import HealthItem from '../HealthItem'
import styles from './index.less'

export default {
  components: { HealthItem },
  data() {
    return {
      styles
    }
  }
}
</script>