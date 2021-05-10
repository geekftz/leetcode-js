/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  // 拿到单词个数
  let i = 0;
  let len = 0
  while (i < s.length) {
    if (s.charAt(i) === ' ') {
      len++
    }
    i++
  }
  len++

  if (k >= len) {
    return s
  }


  // 移动指针
  let j = 0
  let res = ''

  while (k > 0) {
    if (s.charAt(j) === ' ') {
      k--
    }
    res += s.charAt(j)
    j++
  }

  return res.substr(0, res.length - 1)
  // while (k > 0) {
  //   let v = s.charAt(i)
  //   if (v !== ' ') {
  //     res += s.charAt(i)
  //   } else {
  //     res += s.charAt(i)
  //     k--
  //   }
  //   i++
  // }
};

// s = "Hello how are you Contestant"
s = "chopper is not a tanuki"

var k = 4

var res = truncateSentence(s, k)
console.log('%c%s', 'color: #eeff00', res);

// @lc code=end

