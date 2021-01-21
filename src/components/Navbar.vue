<!--
 * @Author: jweboy
 * @Date: 2020-10-20 00:16:04
 * @LastEditors: jweboy
 * @LastEditTime: 2020-10-30 22:33:49
-->
<template>
  <van-nav-bar class="navbar" :title="title" fixed>
    <template #left>
      <van-icon name="arrow-left" class="icon" @click="goBack"/>
    </template>
    <template #title>
      <span class="title">{{title}}</span>
    </template>
    <template #right>
      <span class="title" @click="onRightBtnClick">{{rightText}}</span>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      default: '标题',
      type: String
    },
    rightText: {
      default: '按钮',
      type: String
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    onRightBtnClick() {
      this.$emit('nav-right-click');
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 65px;
  .icon {
    color: #fff;
    font-size: 18px;
  }
  .title {
    color: #fff;
  }
}
</style>
