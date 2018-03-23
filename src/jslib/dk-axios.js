//  Created by edisonThomas on 2018/2/5.
import axios from 'axios'
import {getCookie} from './cookie'

const HttpRequest = axios.create({
  baseURL: 'https://hx.dankal.cn/',
  timeout: 30000,
  headers: {'token': getCookie('user')}
  // headers: {"token": "airon"}
});

// 七牛云
// const getQiniu = () => {
//   return HttpRequest({
//     url: 'api/Qiniu/index',
//     method: 'post'
//   })
// };



//导出模块
export {
  // getQiniu,
}
