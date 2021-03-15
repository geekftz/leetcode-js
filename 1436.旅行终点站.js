/*
 * @Author: hackftz
 * @Date: 2021-03-16 00:31:30
 * @LastEditTime: 2021-03-16 00:39:15
 * @LastEditors: hackftz
 * @FilePath: /let-code/1436.旅行终点站.js
 */
/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let starts = [];
  let ends = [];
  for (let i = 0; i < paths.length; i++) {
    const [start, end] = paths[i];
    starts.push(start);
    ends.push(end);
  }
  console.log('%c [ starts ]', 'font-size:13px; background:pink; color:#bf2c9f;', starts)
  console.log('%c [ ends ]', 'font-size:13px; background:pink; color:#bf2c9f;', ends)

  return ends.filter(v => !starts.includes(v))[0]
};

paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

var res = destCity(paths)
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// @lc code=end

