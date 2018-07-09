import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/app.css'
import './jslib/yp-filters.js'
import './jslib/yp-rem';
import ypUtils from './jslib/yp-utils'
import store from './jslib/yp-store'
import './router/authority'
import {ToastPlugin} from 'vux'

Vue.config.productionTip = false;

Vue.use(ToastPlugin, {position: 'middle', type: 'text', isShowMask: true});

// 添加工具包到vue原型链
Vue.prototype.$ypUtils = ypUtils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
