/*
 * @Author: hackftz
 * @Date: 2021-03-16 09:13:55
 * @LastEditTime: 2021-03-16 09:23:55
 * @LastEditors: hackftz
 * @FilePath: /let-code/657.机器人能否返回原点.js
 */
/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0, y = 0;
  for (const move of moves) {
   switch (move) {
     case 'U':
       y++
       break;
     case 'D':
       y--
       break;
     case 'L':
       x--
       break;
     case 'R':
       x++
       break;
   
     default:
       break;
   }
  }

  return x === 0 && y === 0
};

var res = judgeCircle("RRDD")
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// @lc code=end

