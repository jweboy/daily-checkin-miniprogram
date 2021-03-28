<!--
 * @Author: jweboy
 * @Date: 2021-01-05 20:44:23
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-29 22:49:08
-->
<template>
  <view class="person">
    <view class="detail">
      <image class="avatar" :src="userInfo.avatar"></image>
      <view class="info">
        <text class="username">{{userInfo.nickName}}</text>
        <text class="desc">已坚持12天 健康达标率76.54%</text>
      </view>
    </view>
     <view class="amount">
      <view class="balance">
        <image :src="require('@/static/coin.png')" class="thumb" />
        <text class="text">账户余额</text>
        <text class="price">1243.7</text>
        <text class="unit">元</text>
        <button class="withdraw">提现</button>
      </view>
      <view class="income">
        <view class="item">
          <view class="label">今日收益</view>
          <text :class="['value', 'today-amount']">2.5</text>
          <text class="today-unit">元</text>
        </view>
        <view class="border"></view>
        <view class="item">
          <view class="label">累计收益</view>
          <text class="total-amount">1248.5</text>
          <text>元</text>
        </view>
      </view>
    </view>
    <view class="tips">每日收益将于12:00结算到账</view>
    <tabs :data="tabs" @on-click="onTabsClick" />
    <view class="record-desc">- 显示最近30天的参与参与记录 -</view>
    <view class="join-record">
      <mescroll-body ref="mescrollRef" :up="upOption" @down="onDownRefresh" @up="onUpRefresh"  v-if="joinRecordList.length > 0">
        <join-record v-for="(item, index) in joinRecordList" :key="index" :record="item" />
      </mescroll-body>
      <mescroll-empty v-else></mescroll-empty>
    </view>
  </view>
</template>

<script>
import { getUser } from '@/api/user';
import { getApply } from '@/api/apply';
import Tabs from '@/components/Tabs';
import JoinRecord from '@/components/Item/JoinRecord';
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins";

// http://www.mescroll.com/uni.html

export default {
  mixins: [MescrollMixin],
  components: { Tabs, JoinRecord },
  data() {
    return {
      userInfo: {},
      joinRecordList: [],
      tabs: [
        { title: '参与记录', key: 'joinRecord' },
        { title: '收支明细', key: 'incomeExpenditure' },
        { title: '提现明细', key: 'withdrawal' }
      ],
      upOption:{
        textNoMore: '- 没有更多数据了 -'
      }
    }
  },
  mounted() {
    // 获取当前用户信息
    this.asyncGetUserInfo();
    // 获取用户参与记录列表
    this.asyncGetJoinRecord();
  },
  methods: {
    // onInitScroll(scrollRef) {
    //   this.mescroll = scrollRef
    // },
    onDownRefresh() {
      console.log(this.mescroll)
      this.asyncGetJoinRecord().then(() => {
        // 请求成功,隐藏加载状态
        this.mescroll.endSuccess();
      }).catch(() => {
        // 请求失败,隐藏加载状态
        this.mescroll.endErr();
      });
    },
    onUpRefresh() {
      console.log(this.mescroll)
      this.asyncGetJoinRecord().then((data) => {
        // 请求成功,隐藏加载状态
        this.mescroll.endByPage(data.pageSize, data.totalCount);
      }).catch(() => {
        // 请求失败,隐藏加载状态
        this.mescroll.endErr();
      });
    },
    onTabsClick() {
      this.joinRecordList = [];
      this.asyncGetJoinRecord();
    },
    asyncGetUserInfo() {
      return getUser().then((data) => {
        this.userInfo = data;
      })
    },
    asyncGetJoinRecord() {
      return getApply().then((data) => {
        // this.joinRecordList = data;
        this.joinRecordList = [
          { status: 'success' },
          { status:  'fail' }, 
          { status: 'success' },
          { status:  'fail' }, 
          { status: 'success' },
          { status:  'fail' }, 
          { status: 'success' },
          { status:  'fail' }, 
          { status: 'success' },
          { status:  'fail' }, 
        ];

        return data;
      })
    }
  }
}
</script>

<style lang="less" scoped>
@primary-orange-color: #F9541E;
@orange-color: #FF7C2D;
@black-color: #05070D;
@white-color: #fff;

.person {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f4f4f4;
  .detail {
    display: flex;
    padding: 40rpx 40rpx 30rpx 40rpx;
    background-color: @white-color;
    .avatar {
      margin-right: 32rpx;
      width: 124rpx;
      height: 124rpx;
      border-radius: 50%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    color: @black-color;
    justify-content: center;
    .username {
      margin-bottom: 20rpx;
      font-size: 18px;
      font-weight: 500;
    }
    .desc {
      font-size: 14px;
    }
  }
  .amount {
    margin: 0 30rpx;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 6px 0 rgba(228, 228, 228, .6);
    border-radius: 8rpx;
    background-color: #fff;
    .balance {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      padding: 38rpx 50rpx;
      position: relative;
      .thumb {
        position: absolute;
        left: 0;
        top: 0;
        width: 118rpx;
        height: 118rpx; 
      }
      .text {
        font-size: 16px;
        color: @black-color;
      }
      .price {
        margin-left: 20rpx;
        font-size: 28px;
        color: @primary-orange-color;
        font-weight: 700;
      }
      .unit {
        margin-left: 8rpx;
        margin-right: 28rpx;
        color: @primary-orange-color;
        font-size: 12px;
      }
      .withdraw {
        width: 112rpx;
        height: 42rpx;
        background: @orange-color;
        border-radius: 12rpx;
        color: #fff;
        font-size: 12px;
        line-height: 42rpx;
        margin: 0;
      }
    }
  }
  .border {
    border: solid 0.5px rgba(25, 43, 128, .2);
    margin: 8rpx 10rpx;
    height: 48rpx;
  }
  .income {
    padding: 16rpx 30rpx;
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: flex-end;
      width: calc(50% - 10rpx);
      justify-content: space-around;  
    }
    .label {
      color: #262a38;
      font-size: 14px;
    }
    .today-amount {
      color: @primary-orange-color;
      // margin-left: 50rpx;
      // margin-right: 10rpx;
      font-size: 28px;
      font-weight: 500;
    }
    .today-unit {
      color: @primary-orange-color;
    }
    .total-amount {
      // margin-left: 20rpx;
      // margin-right: 10rpx;
      color: #05070d;
      font-size: 24px;
      font-weight: 500;
    }
  }
  .tips {
    margin: 16rpx 40rpx 15rpx 40rpx;
    font-size: 12px;
    color: rgba(5, 7, 13, 0.45);
  }
  .record-desc {
    padding: 24rpx 160rpx;
    background-color: #fff;
    font-size: 14px;
    color: #9096ad;
    margin-top: 8rpx;
    border-bottom: solid 1px #e4e4e4;
  }
  .join-record {
    height: 500rpx;
    overflow-y: auto;
  }
}
</style>
