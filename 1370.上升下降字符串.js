/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const ss = new Array(26).fill(0);
  const aCharCodeAt = 'a'.charCodeAt();

  for (const char of s) {
    ss[char.charCodeAt() - aCharCodeAt]++;
  }

  let res = '';

  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (ss[i]) {
        res += String.fromCharCode(i + aCharCodeAt);
        ss[i]--;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (ss[i]) {
        res += String.fromCharCode(i + aCharCodeAt);
        ss[i]--;
      }
    }
  }

  return res;
};

var s = 'aaaabbbbcccc';
var res = sortString(s);
console.log('🚀 ~ file: 1370.上升下降字符串.js ~ line 19 ~ res', res);

// @lc code=end
