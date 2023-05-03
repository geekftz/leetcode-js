// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

var minSubArrayLen = function (target, nums) {
  let minLen = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;
  while (j < nums.length) {
    // 主旋律是扩张，找可行解
    sum += nums[j];
    while (sum >= target) {
      // 间歇性收缩，优化可行解
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
};

// var target = 7,
//   nums = [2, 3, 1, 2, 4, 3];
var target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];

// var target = 7,
//   nums = [1, 1, 1, 1, 7];

// var target = 4,
//   nums = [1, 4, 4];

var res = minSubArrayLen(target, nums);
console.log("🚀 ~ file: md-minSubArrayLen.js ~ line 21 ~ res", res);
