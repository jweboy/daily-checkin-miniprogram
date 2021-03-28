<!--
 * @Author: jweboy
 * @Date: 2021-03-28 10:28:18
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-28 22:48:03
-->
<template>
  <view>
    <button @click="onPayClick()">pay 0.01</button>
  </view>
</template>

<script>
import { postPay } from '../../api/pay'

export default {
  data() {
    return {

    }
  },
  methods: {
    async onPayClick() {
      const data = await postPay();
      console.log(1, data)
      const provider = await uni.getProvider({
        service: 'oauth',
        payment: 'wechat'
      });
      console.log(provider)

      // uni.requestPayment({

      // })
    }
  },
  mounted() {
    // this.onPayClick();
  }
}
</script>