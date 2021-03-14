/*
 * @Author: hackftz
 * @Date: 2021-03-15 00:38:18
 * @LastEditTime: 2021-03-15 00:47:50
 * @LastEditors: hackftz
 * @FilePath: /let-code/1725.可以形成最大正方形的矩形数目.js
 */
/*
 * @lc app=leetcode.cn id=1725 lang=javascript
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  var mins = rectangles.map(item => Math.min(item[0], item[1]));
  var max = Math.max(...mins);
  return mins.filter(item => item === max).length;
};

var rectangles = [
  [2, 3],
  [3, 7],
  [4, 3],
  [3, 7],
];
var res = countGoodRectangles(rectangles);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
// @lc code=end
