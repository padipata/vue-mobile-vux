# 基于vue2.js移动端单页应用模板

## 模板内容

更新时间| 更新内容|更新说明
---|---|---
2017-09-12 | 搭建基本项目模板|无
2017-09-12 | 增加服务器基本配置
2017-09-16 | 增加 HTTP 逻辑层示例
2017-09-18 | 添加全局默认样式 | reset.css 、app.css
2017-09-18 | 添加移动端布局(当前设计图宽度为750) | yp-rem
2017-09-20 | 封装路由懒加载和路由拦截 | index.js 、authority.js
2017-09-25 | 增加轮播插件 vue-awesome-swiper | ^2.6.4
2017-09-27 | 添加 vuex | ^2.2.9

2017-12-01 | 引入 less 并配置 webpack | 使用方式：在style中声明 lang="less"
2017-09-28 | 引入 vux 组件库 |
2017-09-28 | 引入css-loader & style-loader | 已配置 webpack
2017-09-28 | 引入地区联动插件 LArea.js | 按项目需求取舍
2017-11-30 | 引入 sha1 加密插件 | ^1.1.1
2017-11-30 | 引入 URLEncode 加/解码插件 | ^1.1.0
2017-11-30 | 引入 axios 并配置 HttpRequest.js 文件 | ^0.16.1


## 安装与运行

```
git clone https://github.com/padipata/vue-mobile-template.git

cd vue-mobile-template

cnpm i

npm run dev //服务端运行 访问 http://localhost:8081

npm run build 项目打包

感兴趣的童鞋可以来个star
```
