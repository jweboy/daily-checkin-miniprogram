<!--
 * @Author: jweboy
 * @Date: 2021-01-03 20:31:23
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-24 17:55:22
-->
<template>
  <view class="health-list">
    <view class="header">
      <text class="title" @click="onShare">早起打卡健康榜</text>
      <button class="link" open-type="share">邀请好友&nbsp;&gt;</button>
    </view>
    <item />
    <item />
    <item />
  </view>  
</template>

<script>
import Item from './Item';

export default {
  components: { Item },
  data() {
    return {
    }
  },
  onShareAppMessage() {
    return {
      title: this.shareText ? this.shareText : "欢迎体验uni-app",
      path: '/pages/tabBar/component/component',
      imageUrl:this.image ? this.image : 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png'
    }
  },
  onLoad: function () {
    uni.getProvider({
      service: 'share',
      success: (e) => {
        console.log('success', e);
        let data = []
        for (let i = 0; i < e.provider.length; i++) {
          switch (e.provider[i]) {
            case 'weixin':
              data.push({
                name: '分享到微信好友',
                id: 'weixin',
                sort:0
              })
              data.push({
                name: '分享到微信朋友圈',
                id: 'weixin',
                type:'WXSenceTimeline',
                sort:1
              })
              break;
            case 'sinaweibo':
              data.push({
                name: '分享到新浪微博',
                id: 'sinaweibo',
                sort:2
              })
              break;
            case 'qq':
              data.push({
                name: '分享到QQ',
                id: 'qq',
                sort:3
              })
              break;
            default:
              break;
          }
        }
        this.providerList = data.sort((x,y) => {
          return x.sort - y.sort
        });
      },
      fail: (e) => {
        console.log('获取分享通道失败', e);
        uni.showModal({
          content:'获取分享通道失败',
          showCancel:false
        })
      }
    });
  },
  methods: {
    share() {
      console.log(2)
      uni.share({
        provider: "weixin",
        scene: "WXSceneSession", // 分享到聊天界面
        type: 1,
        summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
        success: function (res) {
            console.log("success:" + JSON.stringify(res));
        },
        fail: function (err) {
            console.log("fail:" + JSON.stringify(err));
        }
      });
    }
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