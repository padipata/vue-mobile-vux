<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less'; //1px 解决方案

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
