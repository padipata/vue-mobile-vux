import {fetch} from './fetch'

// 例子
const userLogin = (obj) => {
  return fetch({
    url: 'ServiceMember/userLogin',
    data: obj,
    method: 'post'
  })
};

export {
  userLogin
}

