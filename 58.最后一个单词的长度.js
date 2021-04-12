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
  let end = s.length - 1;

  // 先过滤末尾空格
  while (end >= 0 && s.charAt(end) === " ") {
    end--;
  }

  if (end < 0) {
    return 0;
  }

  // 从有值的地方重新计数
  let start = end;

  while (start >= 0 && s.charAt(start) !== " ") {
    start--;
  }

  return end - start;
};

var s = "a ";
var res = lengthOfLastWord(s);
console.log("🚀 ~ file: 58.最后一个单词的长度.js ~ line 17 ~ res", res);

// @lc code=end
