import axios from 'axios';//引入axios
import utils from '../jslib/yp-utils'
import {baseURL} from '../../config/baseUrl'//  获取基础url
import {FINAL_URL} from '../jslib/yp-wechat'

export function fetch(options) {
  let self = this;
  return new Promise((resolve, reject) => {
    const instance = axios.create({  //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        'authorization': utils.getCookie('token')
      },
      timeout: 30 * 1000 // 30秒超时
    });
    instance(options)
      .then(response => { // 请求成功之后进行什么操作
        resolve(response);// 把请求到的数据发到引用请求的地方
      })
      .catch(function (error) {
        reject(error);
        let {status, data} = error.response;
        switch (status) {
          case 401:
            //用户凭证校验不通过,需要重新登录
            utils.setCookie("token", ''); //因为token无效而需要的重定向必须要先清空！！！
            location.href = FINAL_URL;
            break;
          case 404:
            self.$vux.toast.show({text: data.error});
            break;
          case 500:
            self.$vux.toast.show({text: "内容太火爆，请刷新试试~"});
            break;
          default:
            return reject(error.response);
        }
      });
  });
}


