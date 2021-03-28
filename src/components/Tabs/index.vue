<!--
 * @Author: jweboy
 * @Date: 2021-01-09 15:07:38
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-29 21:15:23
-->
<template>
  <view class="tabs" >
    <view class="item" :data-key="item.title" v-for="item in data" :key="item.key" @click="onTabsClick(item.key)">
      <text :class="['title', item.key === activeKey ? 'active' : '']">{{item.title}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeKey: '',
    }
  },
  mounted() {
    if(this.data.length > 0) {
      const firstElem = this.data[0];
      this.activeKey = firstElem.key;
    }
  },
  methods: {
    onTabsClick(key) {
      this.activeKey = key;
      this.$emit('on-click', key);
    }
  }
}
</script>

<style lang="less" scoped>
  .tabs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .item {
      padding: 30rpx 40rpx;
      width: calc(100% / 3);
      text-align: center;
      
      .title {
        color: #9096ad;
        &.active {
          color: #5677fc;
          border-bottom: 1px solid  #5677fc;
        }
      }
    }
  }
</style>