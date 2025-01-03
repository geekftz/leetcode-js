// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0
// 解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。

// 提示：

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  let minDiff = Infinity;

  for (var i = 0; i < nums.length; i++) {
    var left = i + 1;
    var right = nums.length - 1;

    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];
      var diff = Math.abs(sum - target);

      if (diff === 0) {
        return sum;
      }

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

const input = [-1, 2, 1, -4];
const result = threeSumClosest(input, 1);
console.log("🚀 --> file: 16. 最接近的三数之和.js:64 --> result:", result);
