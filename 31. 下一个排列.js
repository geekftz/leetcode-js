// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 必须 原地 修改，只允许使用额外常数空间。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：[1,2,3]
// 示例 3：

// 输入：nums = [1,1,5]
// 输出：[1,5,1]

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;

  if (len <= 1) {
    return nums;
  }

  if (len === 2) {
    [nums[0], nums[1]] = [nums[1], nums[0]];
    return nums;
  }

  let i = len - 2;

  // 从后往前，找到nums[i] < nums[i + 1]

  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      break;
    } else {
      i--;
    }
  }

  if (i === -1) {
    // 说明该排列为从大到小，需要翻转整个数组
    nums.reverse();
    return nums;
  }

  // 从后往前，找到下标在i+1后，到len-1中比nums[i]大的第一个数，并将下标赋值给j
  let j = len - 1;

  while (j > i + 1) {
    if (nums[j] > nums[i]) {
      break;
    } else {
      j--;
    }
  }

  // 交换nums[i]和nums[j]
  [nums[i], nums[j]] = [nums[j], nums[i]];

  // 翻转nums[i+1:]
  let a = i + 1;
  let b = len - 1;

  while (a < b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]; // 交换 nums[a] 和 nums[b]

    a++;
    b--;
  }

  return nums;
};

// const input = [3, 2, 1];

// const input = [1, 3, 7, 5, 4, 2];
// result = [1, 4, 2, 3, 5, 7]

// const input = [1, 3, 7, 4, 5, 2];
// result = [1, 3, 7, 5, 2, 4]

const input = [1, 3, 2]; // [2, 1, 3]
const result = nextPermutation(input);
console.log("🚀 --> file: 31. 下一个排列.js:95 --> result:", result);
