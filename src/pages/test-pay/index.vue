<!--
 * @Author: jweboy
 * @Date: 2021-03-28 10:28:18
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-31 22:24:00
-->
<template>
  <view class="container">
    <button @click="onPayClick" type="primary" class="btn">支付0.01元</button>
  </view>
</template>

<script>
import { postPay } from '../../api/pay'
import { asyncWechatPayment, asyncWechatProvider } from '../../api/weixin'
import { showSuccessMsg } from '../../utils/global'

export default {
  data() {
    return {

    }
  },
  methods: {
    async onPayClick() {
      const { prepay_id, ...restProps } = await postPay();
      const provider = await asyncWechatProvider({  service: 'payment' });

      console.log('provider=>', provider)

      await asyncWechatPayment({
        provider: provider[0],
        orderInfo: prepay_id,
        ...restProps,
      });
      showSuccessMsg('🎉 支付成功～');
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 16px;
  height: calc(100vh - 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    width: 100%;
  }
}
</style>