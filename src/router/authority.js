import router from './index'

//路由拦截
router.beforeEach(function (to, from, next) {
  const ua = navigator.userAgent.toLowerCase();//判断当前浏览器环境
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    console.log('微信浏览器');
    next();
  } else {
    console.log('外置浏览器');
    next();
  }
});

//路由拦截
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);//解决路由跳转不在顶部的问题
  //解决单页应用软键盘返回关闭问题
  if (to !== from) {
    if (document.getElementsByTagName('input')[0]) {
      document.getElementsByTagName('input')[0].blur();
    }
    if (document.getElementsByTagName('textarea')[0]) {
      document.getElementsByTagName('textarea')[0].blur();
    }
  }
});
