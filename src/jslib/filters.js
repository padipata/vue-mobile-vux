import Vue from 'vue'
import {getQiniu} from './dk-axios'

//七牛云图片前缀
let resources = ''

// getQiniu()
//   .then((response) => {
//     resources = response.data.data.config.bucket_domain;
//     console.log(resources, '七牛云')
//   })

Vue.filter('img', function (val) {
  if (val == null) {
    return ''
  }
  return resources + val;
})

// 时间戳过滤器（只有日期）
Vue.filter('dateToString', function (val) {
  if (val == null) {
    return ''
  }
  let d = new Date(val * 1000)
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let realMonth = month >= 10 ? month : "0" + month;
  let realDay = day >= 10 ? day : "0" + day;
  let str = year + "-" + realMonth + "-" + realDay;
  return str
});

// 时间戳过滤器（点）
Vue.filter('dianToString', function (val) {
  if (val == null) {
    return ''
  }
  let d = new Date(val * 1000)
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let realMonth = month >= 10 ? month : "0" + month;
  let realDay = day >= 10 ? day : "0" + day;
  let str = year + "." + realMonth + "." + realDay;
  return str
});

// 时间戳过滤器（去掉秒）
Vue.filter('miaoToString', function (val) {
  if (val == null) {
    return ''
  }
  let d = new Date(val * 1000)
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

// 时间戳过滤器（包括时间）
Vue.filter('timeToString', function (val) {
  if (val == null) {
    return ''
  }
  let d = new Date(val * 1000)
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let realMonth = month >= 10 ? month : "0" + month;
  let realDay = day >= 10 ? day : "0" + day;
  let hour = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
  let minute = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
  let second = d.getSeconds() > 10 ? d.getSeconds() : "0" + d.getSeconds();
  let str = year + "-" + realMonth + "-" + realDay + " " + hour + ":" + minute + ':' + second;
  return str
});


// 类型转换过滤器（gratis免费 integral积分 cash现金优惠券）
Vue.filter('typeTransfer', function (val) {
  if (val == null) {
    return ''
  }
  let str = ''
  if (val == 'gratis') {
    str = '免费优惠券'
  } else if (val == 'integral') {
    str = '积分优惠券'
  } else if (val == 'cash') {
    str = '现金优惠券'
  }
  return str
});


// 优惠券模块  积分显示
Vue.filter('integral', function (val) {
  if (val == null) {
    return ''
  }
  let str = ''
  if (val == 0) {
    str = '免费'
  } else {
    str = val + '积分'
  }
  return str
});


// 需求大厅  时间显示
Vue.filter('initial_time', function (val) {
  if (val == null) {
    return ''
  }
  // 获取传入的时间戳
  let str = ''
  let d = new Date(val * 1000);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  // 获取当前时间戳
  let now_timestamp = (new Date()).valueOf();
  let now_type = new Date();
  let now_timestamp_year = now_type.getFullYear();
  let now_timestamp_month = now_type.getMonth() + 1;
  let now_timestamp_day = now_type.getDate();

  // 当前时间和目标时间差
  let gap_time = now_timestamp - d;
  // 如果gap_time大于24*60*60*1000小于48*60*60*1000则为昨天
  // 如果gap_time大于0小于24*60*60*1000可能为昨天和今天，则比较月份
  // 其余显示年月日格式
  if (gap_time > 24 * 60 * 60 * 1000 && gap_time < 48 * 60 * 60 * 1000) {
    return '昨天'
  } else if (gap_time > 0 && gap_time < 24 * 60 * 60 * 1000) {
    if (now_timestamp_day == day) {
      return '今天'
    } else {
      return '昨天'
    }
  } else {
    let realMonth = month >= 10 ? month : "0" + month;
    let realDay = day >= 10 ? day : "0" + day;
    return str = year + "-" + realMonth + "-" + realDay;
  }

});


//转换时间格式yyyy-MM-dd h:m:s（抢红包）
Vue.filter('getTime', function (timestamp) {
  var newDate = new Date();
  newDate.setTime(timestamp * 1000);
  Date.prototype.format = function (format) {
    var date = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
      }
    }
    return format;
  }
  return newDate.format('yyyy.MM.dd hh:mm');
});


// 获取时间（距离现在时分秒）
Vue.filter('getHMS', function (timestamp) {
  if (timestamp == null) {
    return ''
  }
  let timestamp_now = Date.parse(new Date()) / 1000;
  let s = timestamp_now - timestamp;
  if (s / 86400 >= 1) {
    return Math.ceil(s / 86400)+'天';
  } else if (s / 3600 >= 1) {
    return Math.ceil(s / 3600)+'小时';
  } else if (s / 60 >= 1) {
    return Math.ceil(s / 60)+'秒';
  }

});

