// 1512. 好数对的数目
// 给你一个整数数组 nums 。

// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let obj = {};
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (obj[num] === undefined) {
      obj[num] = 0;
    } else {
      obj[num] = obj[num] + 1;
    }
    console.log('🚀 ~ file: ez-numIdenticalPairs.js ~ line 24 ~ numIdenticalPairs ~ obj[num]', obj[num]);

    res += obj[num];
  }

  return res;
};

var nums = [1, 2, 3, 1, 1, 3];

console.time();
var res = numIdenticalPairs(nums);
console.log('🚀 ~ file: ez-numIdenticalPairs.js ~ line 44 ~ res', res);
console.timeEnd();
