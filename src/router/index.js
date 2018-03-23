import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/vuepage/Index');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})
