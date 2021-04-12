/*
 * @Author: hackftz
 * @Date: 2021-03-14 22:08:33
 * @LastEditTime: 2021-03-14 22:47:47
 * @LastEditors: hackftz
 * @FilePath: /let-code/1534.统计好三元组.js
 */
/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  const abs = Math.abs;
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (abs(arr[i] - arr[j]) > a) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        if (abs(arr[j] - arr[k]) > b) {
          continue;
        }

        if (
          abs(arr[i] - arr[j]) <= a &&
          abs(arr[j] - arr[k]) <= b &&
          abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }

  return count;
};
// @lc code=end
