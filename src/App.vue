<!--
 * @Author: your name
 * @Date: 2020-07-15 11:33:48
 * @LastEditTime: 2020-07-15 15:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vwporject\src\App.vue
--> 
<template>
  <div id="app">
    <transition >
    <router-view />
    </transition>
    

    <van-tabbar v-model="active"  route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/about">列表</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/">分类</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/home">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0
    }
  },
  methods: {
    
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-tabbar{
  border-top: 1px solid black;
  height: 100px !important;
  line-height: 100px !important;
}
</style>
