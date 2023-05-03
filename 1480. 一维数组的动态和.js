// 1480. 一维数组的动态和

// 简单

// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/running-sum-of-1d-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  nums.reduce((pre, cur, i, arr) => {
    arr[i] = pre + cur;
    return pre + cur;
  }, 0);
  return nums;
};

console.time();
var res = runningSum([1, 2, 3, 4]);
console.timeEnd();

console.log('🚀 ~ file: runningSum.js ~ line 35 ~ res', res);
