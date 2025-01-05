// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]

// 提示：

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  const res = [];
  if (len < 4) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 如果从i开始，往后面加大于target，跳出循环
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }

    // 如果从i开始，加上最后倒序3个数字的和，小于target的话，进入到下个遍历
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
      continue;
    }

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // 如果从j开始，往后面加大于target，跳出循环
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }

      // 如果从j开始，加上最后倒序2个数字的和，小于target的话，进入到下个遍历
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) {
        continue;
      }

      let left = j + 1;
      let right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          // 去重
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return res;
};

// const input = [1, 0, -1, 0, -2, 2];
// const result = fourSum(input, 0);
const input = [2, 2, 2, 2, 2];
const result = fourSum(input, 8);
console.log("🚀 --> file: 18. 四数之和.js:87 --> result:", result);
