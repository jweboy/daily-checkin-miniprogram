<!--
 * @Author: jweboy
 * @Date: 2021-01-09 15:30:37
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-09 17:33:23
-->
<template>
  <view :class="styles.withdrawal">
    <view :class="styles.form">
      <view :class="styles['form-item']">
        <text :class="styles.label">到账账户</text>
        <input placeholder="请输入" />
      </view>
      <view :class="styles['form-item']">
        <text :class="styles.label">账户实名</text>
        <input placeholder="请输入" />
      </view>
    </view>
    <view :class="styles.form">
      <view :class="styles.title">提现金额</view>
      <view :class="styles['form-item']">
        <text :class="styles.unit">¥</text>
        <input placeholder="请输入"/>
      </view>
      <view :class="[styles['form-item'], styles.desc]">
        <text>当前可提现金额¥33.22，</text>
        <text>全部提现</text>
      </view>
    </view>
    <button type="primary" :class="styles.btn">确认提现</button>
    <view :class="styles.notice">
      <view :class="styles.title">温馨提示</view>
      <view :class="styles.desc">
        1.技术服务费低，仅千分之6 <br />
        2.微信零钱提现每天限额1000元，实时到账  <br />
        3.微信提现只能提现至同个注册手机号的微信内  <br />
        4.手续费补贴，大额提现申请，对公账户等有疑问  <br />
        可联系客服：0571-88788888 
      </view>
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