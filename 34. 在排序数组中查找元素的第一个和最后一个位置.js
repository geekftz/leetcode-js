// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let res = [-1, -1];

//   // 二分
//   while (left <= right) {
//     // 找到中间下面
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       res[0] = mid;
//       res[1] = mid;

//       // 找到左边界
//       while (mid - 1 >= 0 && nums[mid - 1] === target) {
//         mid--;
//       }
//       res[0] = mid;

//       // 找到右边界
//       while (mid + 1 < nums.length && nums[mid + 1] === target) {
//         mid++;
//       }
//       res[1] = mid;

//       return res;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return res;
// };


var searchRange = function (nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1
  let res = [-1, -1]
  let targetIndex = null

  if (len === 0) {
    return res
  }

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left

    if (nums[mid] === target) {
      targetIndex = mid
      break
    }


    if (nums[mid] > target) {
      right = mid - 1
    }

    if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (targetIndex !== null) {
    // 向左
    res = [targetIndex, targetIndex]

    while (nums[res[0]] === nums[res[0] - 1]) {
      res[0] -= 1
    }
    // 向右
    while (nums[res[1]] === nums[res[1] + 1]) {
      res[1] += 1
    }

    return res
  }

  return res
}

// const input = [5, 7, 7, 8, 8, 10]

// const result = searchRange(input, 6)

const input = [1]
const result = searchRange(input, 1)
console.log('🚀 --> result:', result);
