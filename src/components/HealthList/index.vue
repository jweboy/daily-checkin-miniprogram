<!--
 * @Author: jweboy
 * @Date: 2021-01-03 20:31:23
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-30 22:14:14
-->
<template>
  <view class="health-list">
    <view class="header">
      <text class="title" @click="onShare">早起打卡健康榜</text>
      <button class="link" open-type="share">邀请好友&nbsp;&gt;</button>
    </view>
    <item v-for="(item, index) in data" :key="item.nickName" :data="item" :index="index+1" />
  </view>  
</template>

<script>
import Item from './Item';


export default {

  components: { Item },
  props: ['data'],
  data() {
    return {
    }
  },
  methods: {
    // share() {
    //   console.log(2)
    //   uni.share({
    //     provider: "weixin",
    //     scene: "WXSceneSession", // 分享到聊天界面
    //     type: 1,
    //     summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
    //     success: function (res) {
    //         console.log("success:" + JSON.stringify(res));
    //     },
    //     fail: function (err) {
    //         console.log("fail:" + JSON.stringify(err));
    //     }
    //   });
    // }
  }
}
</script>

<style lang="less" scoped>
.health-list {
  background-color: #fff;
  margin: auto;
  padding: 15px;
  width: 80%;
  border-radius: 4px;
  .header {
    padding-bottom: 16rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid #E4E4E4;
    .title {
      color: #05070D;
    }
    .link {
      color: #5677FC;
      font-size: 14px;
      background-color: transparent;
      margin: inherit;
      padding: 0;
      border-radius: none;
      &::after {
       content: initial;
      }
    }
  }
}

</style>