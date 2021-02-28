// 1470. 重新排列数组
// 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

// 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
  return nums.map((v, i) => i % 2 === 0 ? nums[i / 2] : nums[n + Math.floor(i / 2)])
};

console.time();
var res = shuffle([2, 5, 1, 3, 4, 7], 3);
console.timeEnd();


console.log('🚀 ~ file: ez-shuffle.js ~ line 25 ~ res', res);
