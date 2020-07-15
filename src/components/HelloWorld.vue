<!--
 * @Author: your name
 * @Date: 2020-07-15 11:33:48
 * @LastEditTime: 2020-07-15 15:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vwporject\src\components\HelloWorld.vue
--> 
<template>
  <div class="test-viewport">
    <h1>{{ msg }}</h1>
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 80" :key="value" icon="photo-o" :text="`文字${value}`" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;

  // h1{
  //   margin-top: 100px;
  // }
}
</style>
