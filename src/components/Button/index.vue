<!--
 * @Author: jweboy
 * @Date: 2021-01-23 20:03:40
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-30 23:37:06
-->
<template>
  <button :class="btnClass"  @click="onClick">
    <text class="text">{{title}}</text>
  </button>
</template>

<script>
export default {
  name: 'DailyButton',
  props: {
    className: {
      default: '',
      type: String,
    },
    title: {
      default: '标题',
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit('on-click');
    }
  },
  computed: {
    btnClass() {
      const classes = ['btn'];
      if(this.className) {
        classes.push(this.className);
      }
      return classes;
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 100%;
  height: 92rpx;
  line-height: 92rpx;
  background-image: linear-gradient(180deg, #FFD73F 0%, #FFCE15 100%);
  box-shadow: 0 4px 0 0 #FF9612, 0 6px 6px 0 rgba(165,7,49,0.50), inset 0 1px 3px 0 #FFF6E6;
  border-radius: 16rpx;
  font-size: 32rpx;
  &.disabled {
    background-color: #d51f1f;
    color: #ff8fa6;
    background-image: none;
    box-shadow: none;
  }
  .text {
    font-size: 18px;
    color: #AD2102;
  }
}

</style>