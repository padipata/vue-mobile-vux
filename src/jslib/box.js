// 神奇盒子用于放置公共的业务方法

const magicBox = {
  // 修改标题
  title(title) {
    document.title = title;
  },
  // 获取url中的参数（url中没有#）
  get_url_params(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },
  //		获取url中的参数（url中有#）
  get_hash_url_params(eNumber) {
    var after = window.location.hash.split("?")[1];
    if (after) {
      var reg = new RegExp("(^|&)" + eNumber + "=([^&]*)(&|$)");
      var r = after.match(reg);
      if (r != null) {
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
    var clearNull = phone.replace(/\s+/g, "");
    // console.log(clearNull,'clearNull');
    if (clearNull == '') {
      return null
    } else if (!(/^1[34578]\d{9}$/.test(clearNull))) {
      return false
    } else {
      return clearNull
    }
  },

}
export default magicBox;
