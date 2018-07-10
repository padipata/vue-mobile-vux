'use strict';

/**
 * @author padipata
 * @date 2018/7/10
 * @desc 项目打包方式: 测试环境-npm run yp 生产环境-npm run build
 */
const target = process.env.npm_lifecycle_event;

if (target === 'yp') {
  // 测试环境
  module.exports = {
    NODE_ENV: '"production"',
    baseURL: 'http://test.yipage.com/',//接口地址
    BASE_REDIRECT_URL: "https://open.weixin.qq.com/connect/oauth2/authorize",
    APP_ID: "wxe10ee0351418654f",//微信公众号appid
    APP_DOMAIN: "http://test.yipage.cn/", //app网页授权域名
    SCOPE: "snsapi_userinfo",  //snsapi_base或snsapi_userinfo
    STATE: "STATE", //可能需要携带的附加参数,目前大多业务暂时不需要用到，写死即可
  }
} else {
  // 生产环境
  module.exports = {
    NODE_ENV: '"production"',
    baseURL: 'http://dev.yipage.com/',//接口地址
    BASE_REDIRECT_URL: "https://open.weixin.qq.com/connect/oauth2/authorize",
    APP_ID: "wxe10ee0351418654f",//微信公众号appid
    APP_DOMAIN: "http://dev.yipage.cn/", //app网页授权域名
    SCOPE: "snsapi_userinfo",  //snsapi_base或snsapi_userinfo
    STATE: "STATE", //可能需要携带的附加参数,目前大多业务暂时不需要用到，写死即可
  }
}
