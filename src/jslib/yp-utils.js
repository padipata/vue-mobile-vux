// 神奇盒子用于放置公共的业务方法

const ypUtils = {
  // 修改标题
  title(t) {
    document.title = t;
    let i = document.createElement('iframe');
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(function () {
        i.remove();
      }, 9)
    };
    document.body.appendChild(i);
  },

  // 设置cookie
  setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },

  // 获取cookie
  getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
    }
    return "";
  },

  // 获取url中的参数（url中没有#）
  get_url_params(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) {
      return unescape(r[2]);
    }
    return null;
  },

  // 获取url中的参数（url中有#）
  get_hash_url_params(eNumber) {
    let after = window.location.hash.split("?")[1];
    if (after) {
      let reg = new RegExp("(^|&)" + eNumber + "=([^&]*)(&|$)");
      let r = after.match(reg);
      if (r !== null) {
        return decodeURIComponent(r[2]);
      } else {
        return null;
      }
    }
  },

  // 判断用户是否有输入
  clear_null(user_input) {
    return user_input.replace(/\s+/g, "");
  },

  // 判断用户是否输入超过5位字符
  clear_five(user_input) {
    return user_input.replace(/^.{3,20}$/g, "");
  },

  // 手机号码验证
  phone(phone) {
    let clearNull = phone.replace(/\s+/g, "");
    if (!clearNull) {
      return null
    } else if (!(/^1[34578]\d{9}$/.test(clearNull))) {
      return false
    } else {
      return clearNull
    }
  }

};
export default ypUtils;
