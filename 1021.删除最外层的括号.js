/*
 * @Author: hackftz
 * @Date: 2021-03-16 00:04:40
 * @LastEditTime: 2021-03-16 00:19:29
 * @LastEditors: hackftz
 * @FilePath: /let-code/1021.删除最外层的括号.js
 */
/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  var srr = s.split('');
  let count = 0
  let lasti = 0
  let res = []

  for (let i = 0; i < srr.length; i++) {
    const v = srr[i];

    if (v === '(') {
      count++;
    } else {
      count--;

      if (count === 0) {
        if (i === srr.length) {
          res.push(s.slice(lasti, -1))
        } else {
          res.push(s.slice(lasti, i + 1))

        }
        
        lasti = i + 1
      }
    }
    
  }

  return res.map(v => v.slice(1, -1)).join('')
};

var s = "(()())(())"

var res = removeOuterParentheses(s)
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// @lc code=end

