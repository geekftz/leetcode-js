/*
 * @Author: hackftz
 * @Date: 2021-03-15 23:28:07
 * @LastEditTime: 2021-03-15 23:40:50
 * @LastEditors: hackftz
 * @FilePath: /let-code/1528.重新排列字符串.js
 */
/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  return indices.map((v, i) => ({
    idx: v,
    val: s.charAt(i)
  })).sort((v, w) => v.idx - w.idx).map(v => v.val).join('')
};


var s = "codeleet"
var indices = [4,5,6,7,0,2,1,3]

var res = restoreString(s, indices)
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// @lc code=end

