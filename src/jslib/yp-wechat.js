/**
 * Created by padipata on 2018/07/05.
 * 微信相关封装
 */
import {BASE_REDIRECT_URL, APP_ID, APP_DOMAIN, SCOPE, STATE} from '../../config/baseUrl'

//微信授权
const FINAL_URL = `${BASE_REDIRECT_URL}?appid=${APP_ID}&redirect_uri=${encodeURIComponent(APP_DOMAIN)}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`;

module.exports = {
  FINAL_URL
};
