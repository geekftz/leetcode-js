// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

const trackBack = (list, result, nums) => {
  if (list.length === nums.length) {
    const l = list.slice();
    result.push(l);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (list.includes(nums[i])) {
      continue;
    }

    list.push(nums[i]);
    trackBack(list, result, nums);
    list.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  trackBack([], result, nums);

  return result;
};

const input = [1, 2, 3];
const result = permute(input);
console.log("🚀 --> file: 46. 全排列.js:48 --> result:", result);
