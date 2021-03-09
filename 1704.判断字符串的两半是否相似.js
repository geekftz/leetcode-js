/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const regexp = /[a|e|i|o|u|A|E|I|O|U]/g;
  const halflen = s.length / 2;

  const left = s.slice(0, halflen).match(regexp);
  const right = s.slice(halflen).match(regexp);

  if (left && right) {
    return left.length === right.length;
  }

  return left === right;
};

var s = 'book';

var res = halvesAreAlike(s);
console.log('🚀 ~ file: 1704.判断字符串的两半是否相似.js ~ line 24 ~ res', res);
// @lc code=end
