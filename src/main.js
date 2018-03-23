import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/app.css'
import axios from 'axios'
import './jslib/filters.js'
import magicBox from './jslib/box'
import store from './jslib/store'
import './jslib/UIAdapter';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;
//继承axios
Vue.prototype.$axios = axios;

//路由卫士
router.beforeEach(function (to, from, next) {
  //判断当前浏览器环境
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    console.log('微信浏览器')
    next();
  } else {
    console.log('外置浏览器');
    next();
  }
});

//定制分享
router.afterEach((to, from, next) => {
  //解决路由跳转不在顶部的问题
  window.scrollTo(0, 0);

  //解决单页应用软键盘返回关闭问题
  if (to != from) {
    if (document.getElementsByTagName('input')[0]) {
      document.getElementsByTagName('input')[0].blur();
    }
    if (document.getElementsByTagName('textarea')[0]) {
      document.getElementsByTagName('textarea')[0].blur();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
Vue.prototype.$magicBox = magicBox;
