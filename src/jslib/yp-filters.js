import Vue from 'vue'

//七牛云图片前缀
let resources = 'http://test';

Vue.filter('img', function (val) {
  if (!val) {
    return ''
  }
  return resources + val;
});

// 时间戳过滤器
Vue.filter('miaoToString', function (val) {
  if (!val) {
    return ''
  }
  let d = new Date(val * 1000);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let realMonth = month >= 10 ? month : "0" + month;
  let realDay = day >= 10 ? day : "0" + day;
  let hour = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
  let minute = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
  let second = d.getSeconds() > 10 ? d.getSeconds() : "0" + d.getSeconds();
  let str = year + "-" + realMonth + "-" + realDay + " " + hour + ":" + minute;
  return str
});


// 距离当前时间
Vue.filter('getHMS', function (timestamp) {
  if (!timestamp) {
    return ''
  }
  let timestamp_now = Date.parse(new Date()) / 1000;
  let s = timestamp_now - timestamp;
  if (s / 86400 >= 1) {
    return Math.ceil(s / 86400) + '天';
  } else if (s / 3600 >= 1) {
    return Math.ceil(s / 3600) + '小时';
  } else if (s / 60 >= 1) {
    return Math.ceil(s / 60) + '秒';
  }
});

