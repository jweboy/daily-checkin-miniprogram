<!--
 * @Author: jweboy
 * @Date: 2020-12-13 22:53:39
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-19 22:24:47
-->
<template>
  <view :class="styles.main">
    <!-- <image :class="styles.background" src="../../assets/background@3x.png"/> -->
    <challenge />
    <!-- <view :class="styles.challenge">
      <text :class="styles.title">早起挑战赛</text>
      <view :class="styles.card">
        <view :class="styles.top">
          <view :class="styles.result">
            <text :class="styles.subtitle">恭喜获得奖励金</text>
            <text :class="styles.desc">本期已有{{count}}人报名</text>
          </view>
        </view> -->
        <!--  -->
          <!-- <view :class="styles.result">
            <view :class="styles.text">20201230期奖金总额(元)</view>
            <view :class="styles.amount">283820.05</view>
            <view :class="styles.tips">已有300人打卡成功</view>
          </view>
          <view :class="styles.action">
            <button :class="styles.btn"  @click="onSubmit">
              <text :class="styles.text">新人支付0.99元参与</text>
            </button>
            <view :class="styles['check-area']">
              <checkbox value="" :class="styles.checkbox" style="transform:scale(0.7)" />
              <view>我已阅读并同意 
                <text :class="styles.protocol">《用户协议》</text>
              </view>
            </view>
          </view>
        </view>
        <view :class="styles.bottom">
          <view :class="styles['step-title']">
            <text>打卡成功后分失败人的钱</text>
          </view>
          <view :class="styles.step"></view> 
        </view>
      </view>
      <view :class="styles.intro">
        奖金到账：打卡当日中午12:00，扣除技术服务0.6%后，保证金与奖金(平分未打卡参与者的保证金)一起转到账户余额内
      </view>
    </view>
    <health-card />
    <tab-bar /> -->
  </view>
</template>

<script>
import HealthCard from './components/HealthCard'
import Tabbar from '../../components/Tabbar'
import styles from './index.less'
import Challenge from '@/components/Challenge'

// console.log(styles)

export default {
  components: { Tabbar, HealthCard, Challenge },
  data() {
    return {
      styles,
      count: 2343,
    }
  },
  methods: {
    onSubmit() {
      console.log('object')    
    }
  },
  mounted() {
    // uni.login().then(data => {
    //   console.log(data)
    // })
    // this.asyncGetUserInfo();
  },
  methods: {
    // asyncGetUserInfo() {
    //   return uni.getUserInfo().then(data => {
    //     console.log(data)
    //   });
    // }
  }
}
</script>

<style  module>
.main {
  background-image: linear-gradient(0deg, #380E94 0%, #2D15A7 100%);
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
/* .main1 {
  background-image: linear-gradient(0deg, #380E94 0%, #2D15A7 100%);
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .challenge {
    width: 88%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 45px;
      color: #fff;
    }
    .card {
      padding: 6px;
      height: 300px;
      border: 6px solid #FF7F9F;
      background-color: #9E0A3B;
      border-radius: 4px;
    }
    .result {
      // background-image: linear-gradient(180deg, #FF426E 0%, #EB2845 100%);
      // border-radius: 8px;
      // height: 200px;
      border-bottom: 1px dashed #FFFFB8;
      padding: 12px 4px;
      .amount {
        font-weight: 500;
        font-size: 32px;
        color: #FFFFB8;
      }
      .text {
        font-size: 14px;
        color: #FFFFB8;
      }
      .tips {
        font-size: 12px;
        color: #FFFFB8;
      }
    }
    .action {
      .btn {
        margin-top: 8px;
        width: 229px;
        background-image: linear-gradient(180deg, #FFD73F 0%, #FFCE15 100%);
        box-shadow: 0 4px 0 0 #FF9612, 0 6px 6px 0 rgba(165,7,49,0.50), inset 0 1px 3px 0 #FFF6E6;
        border-radius: 8px;
      }
      .text {
        font-size: 18px;
        color: #AD2102;
      }
      .read {
        color: #fff;
        font-size: 12px;
        .text {
          color: #000020;
        }
      }
    }
    .subtitle {
      color: #fff;
      font-size: 16px;
    }
    .desc {
      color: #fff;
      font-size: 14px;
    }
  }
} */
</style>