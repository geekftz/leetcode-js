/*
 * @Author: hackftz
 * @Date: 2021-03-21 00:04:36
 * @LastEditTime: 2021-03-21 01:25:21
 * @LastEditors: hackftz
 * @FilePath: /let-code/33.搜索旋转排序数组.js
 */
/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  if (len === 0) {
    return -1;
  }

  if (len === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let l = 0,
    r = len - 1;

  while (l <= r) {
    // 中间下标
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 后半部分是有序数组

      if (nums[mid] < target && target <= nums[len - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};

var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log('%c⧭', 'color: #731d6d', nums);

var res = search(nums, target);
console.log('%c%s', 'color: #006dcc', res);
// @lc code=end
