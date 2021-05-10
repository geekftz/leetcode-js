/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let i = 1;
//   let count = 1;
//   while (i < nums.length) {
//     if (nums[i] === nums[i - 1]) {
//       count++

//       if (count > 2) {
//         nums.splice(i, 1)
//         i--
//       }
//     } else {
//       count = 1
//     }

//     i++
//   }

//   console.log('%c⧭', 'color: #807160', nums);
//   return nums.length
// };


var removeDuplicates = function(nums) {
  let j = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      count = 1
    }

    console.log('%c%s', 'color: #e57373', count);
    if (count <= 2) { // 小于等于2都是最新的 需要加入 否则是旧的就过滤
      nums[j] = nums[i]
      j++
    }
  }

  return j
};



var nums = [1,1,1,1,2,2,3]
// var nums = [0,0,1,1,1,1,2,3,3]

console.log('ori nums: %c⧭', 'color: #0088cc', nums);

var res = removeDuplicates(nums)
console.log('res num: %c%s', 'color: #aa00ff', res);


// @lc code=end

