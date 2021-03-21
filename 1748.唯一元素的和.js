/*
 * @Author: hackftz
 * @Date: 2021-03-16 09:35:35
 * @LastEditTime: 2021-03-16 09:42:04
 * @LastEditors: hackftz
 * @FilePath: /let-code/1748.唯一元素的和.js
 */
/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = 1
    } else {
      map[num]++
    }
  }
  console.log('%c [ map ]', 'font-size:13px; background:pink; color:#bf2c9f;', map)

  let res = 0;

  for (const k in map) {
    if (map[k] === 1) {
      console.log('%c [ k ]', 'font-size:13px; background:pink; color:#bf2c9f;', k)
      res+=Number(k);
    }
  }

  return res
};

var nums = [1,2,3,2]

var res = sumOfUnique(nums)
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// @lc code=end

