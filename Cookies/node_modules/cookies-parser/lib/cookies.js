'use strict';
var toughCookie = require('tough-cookie');

const defaultOptions = {
  domain: '.abc.com',
  path: '/'
}

/**
 * 解析一对cookies字符串，转换成符合Phantomjs规范的cookies对象
 * 
 * @param {String} str cookies字符串 
 * @param {Object} options 配置
 * @return {Object}
 */
const parseCookie = function (str, options) {
  var cookie = toughCookie.parse(str);
  return {
    // the touch-cookie output is slightly
    // different from what PhantomJS accepts
    name: cookie.key,
    value: cookie.value,
    domain: cookie.domain || options.domain,
    path: cookie.path || options.path,
    httponly: cookie.httpOnly,
    secure: cookie.secure,
    expires: cookie.expires // Default: 'Infinity'
  };
}

/**
 * 多对cookies字符串转换成为符合Phantomjs规范的对象数组
 * 
 * 相关链接：http://phantomjs.org/api/webpage/method/add-cookie.html
 * Phantomjs.addCookie(cookie)
 {
  'name'     : 'Valid-Cookie-Name', 
  'value'    : 'Valid-Cookie-Value',
  'domain'   : 'localhost',
  'path'     : '/foo',
  'httponly' : true,
  'secure'   : false,
  'expires'  : (new Date()).getTime() + (1000 * 60 * 60)
 }
 *
 * @param {String} str cookies字符串
 * @param {Object} options
 * @return {Array | Object}
 */
exports.parse = function (str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  options = Object.assign({}, defaultOptions, options || {});

  let cookies = [];
  let strArr = str.split(';');

  strArr.forEach(str => {
    let cookieItem;
    try {
      cookieItem = parseCookie(str.trim(), options);
    } catch (error) {
      cookieItem = null;
    }
    if (cookieItem) {
      cookies.push(cookieItem);
    }
  });
  return cookies;
};
