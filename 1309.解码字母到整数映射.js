/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  var len = s.length;
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  var i = 0;
  while (i < s.length) {
    if (s[i + 2] === '#') {
      s = s.substring(0, i) + chars[s.substring(i, i + 2) - 1] + s.substring(i + 3, len);
      i = i + 1;
    } else {
      s = s.substring(0, i) + chars[s.substring(i, i + 1) - 1] + s.substring(i + 1, len);

      i = i + 1;
    }
  }

  return s;
};

var s = '10#11#12';

var res = freqAlphabets(s);
// 输出："jkab"

console.log('res: ', res);

// @lc code=end
