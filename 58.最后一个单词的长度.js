/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.replace(/\s+/g, '') === '') {
    return 0;
  }
  console.log("🚀 ~ file: 58.最后一个单词的长度.js ~ line 17 ~ lengthOfLastWord ~ s.split(' ')", s.split(' '));
  return s
    .split(' ')
    .filter(v => v !== '')
    .slice(-1)[0].length;
};

var s = 'a ';
var res = lengthOfLastWord(s);
console.log('🚀 ~ file: 58.最后一个单词的长度.js ~ line 17 ~ res', res);

// @lc code=end
