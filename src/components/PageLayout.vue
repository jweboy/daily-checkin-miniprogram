<!--
 * @Author: jweboy
 * @Date: 2020-10-20 00:16:04
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-09 16:15:13
-->
<template>
  <div>
    <navbar v-if="hasNavbar" :title="title" class="navbar" :right-text="navbarRightText" v-on="$listeners" />
    <div class="container" :style="getStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'PageLayout',
  components: {
    Navbar
  },
  props: {
    title: {
      default: '标题',
      type: String
    },
    isFullScreen: {
      default: false,
      type: Boolean
    },
    bgColor: {
      default: 'white',
      type: String
    },
    hasNavbar: {
      default: true,
      type: Boolean
    },
    hasTabbar: {
      default: true,
      type: Boolean
    },
    navbarRightText: {
      default: '',
      type: String
    },
    isScroll: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    getStyle() {
      const colorMap = {
        white: '#fff',
        grey: '#f5f5f5'
      }
      return {
        padding: this.isFullScreen ? 0 : '1rem',
        height: this.getHeight(),
        backgroundColor: colorMap[this.bgColor],
        marginTop: !this.hasNavbar ? 0 :  '65px',
        overflow: this.isScroll ? 'auto' : 'hidden'
      }
    }
  },
  methods: {
    getHeight() {
      if(this.hasNavbar) {
        if(this.hasTabbar) {
          return 'calc(100vh - 7.1825rem)';
        }
        return this.isFullScreen ? 'calc(100vh - 65px)' : 'calc(100vh - 97px)';
      }
      return '100vh'
    }
  },
}
</script>

<style lang="less" scoped>
.navbar {
  // background-image: url('../static/navbar.jpeg');
  background-size: cover;
}
.container {
  // height: calc(100vh - 97px); // 65 + 32
  margin-top: 65px;
  overflow: auto;
}
</style>
