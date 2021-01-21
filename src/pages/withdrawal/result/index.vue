<!--
 * @Author: jweboy
 * @Date: 2021-01-09 17:34:14
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-09 17:59:48
-->
<template>
  <view :class="styles['withdrawal-result']">
    <view :class="styles.notice">
      资金到账时间预计有1分钟延迟，请耐心等待
    </view>
    <view :class="styles.content">
      <card>
        <steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1" />
      </card>
      <card>
        <list-item />
      </card>
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