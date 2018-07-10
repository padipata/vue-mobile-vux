# 一页科技 移动端单页应用开发模板

## 模板内容

更新时间| 更新内容|说明
---|---|---
2018-07-04 | 搭建基本项目模板|无
2018-07-04 | 封装全局默认样式 | reset.css 、app.css
2018-07-04 | 封装移动端布局(当前设计图宽度为750) | yp-rem.js
2018-07-04 | 封装常用方法 | yp-utils.js
2018-07-04 | 封装过滤器方法 | yp-filters.js
2018-07-04 | 封装微信相关方法 | yp-wechat.js
2018-07-04 | 封装路由懒加载和路由拦截 | 懒加载：index.js / 路由拦截：authority.js
2018-07-04 | 引入轮播插件 vue-awesome-swiper | ^2.6.4
2018-07-04 | 引入状态管理 vuex | ^2.2.9
2018-07-04 | 引入css预处理 less | 在style中声明lang="less"
2018-07-04 | 引入组件库 vux | ^2.9.2
2018-07-04 | 引入 vux-loader | 修改配置webpack.base.conf.js
2018-07-04 | 封装 HTTP 逻辑层 | fetch.js、api.js


## 安装与运行

```
git clone https://github.com/padipata/vue-mobile-vux.git

cd vue-mobile-vux

npm install

npm run dev //服务端运行 访问 http://localhost:8080

npm run yp 测试环境打包

npm run build 生产环境打包
```


