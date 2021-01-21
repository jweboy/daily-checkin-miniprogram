<!--
 * @Author: jweboy
 * @Date: 2020-12-19 21:20:10
 * @LastEditors: jweboy
 * @LastEditTime: 2020-12-19 21:25:31
-->
<template>
  <view>
    <custom-tab-bar direction="horizontal" :show-icon="false" />
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>