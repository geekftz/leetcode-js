/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let str = '';

  s = s.split('');

  while (s.length) {
    const a = s.splice(0, 1);

    str += a;

    if (str.match(/L/g) !== null && str.match(/R/g) !== null && str.match(/L/g).length === str.match(/R/g).length) {
      count++;
    }
  }

  return count;
};

s = 'RLRRLLRLRL';
var res = balancedStringSplit(s);
console.log('🚀 ~ file: 1221.分割平衡字符串.js ~ line 33 ~ res', res);
// @lc code=end
