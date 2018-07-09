<template>
  <div>
    <p @click="onClick()">点我</p>

    <tabbar style="position: fixed">
      <tabbar-item selected>
        <img slot="icon" src="../assets/img/ic_home_home_tab_light.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/img/ic_home_classtify_tab_normal.png">
        <span slot="label">商品</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/img/ic_home_shop_tab_normal.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/img/ic_home_mine_tab_normal.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    data() {
      return {}
    },
    components: {
      Tabbar,
      TabbarItem,
    },
    methods: {
      onClick() {
        this.$vux.toast.show({text: 'Loading'})
      }
    },
    mounted() {
    },
    updated() {
    }
  }
</script>

<style scoped lang="less">

</style>
