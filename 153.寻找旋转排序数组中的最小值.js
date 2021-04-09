/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let len = nums.length;
  let i = 0;
  let j = len - 1;

  while (i < j) {
    let mid = Math.floor(i + (j - i) / 2);
    console.log("%c mid %s", "color: #33cc99", mid);

    if (nums[mid] > nums[j]) {
      i++;
    } else {
      j = mid;
    }
  }
  console.log("%c i %s", "color: #ffa280", i);

  return nums[i];
};

// var nums = [3, 4, 5, 1, 2];
var nums = [4, 5, 6, 7, 0, 1, 2];
var res = findMin(nums);

console.log("%c res ⧭", "color: #e5de73", res);

// @lc code=end
