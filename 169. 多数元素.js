/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  let max = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    map[num] = map[num] ? map[num] + 1 : 1;

    max = max ? (map[max] > map[num] ? max : num) : num;
  }

  console.log("🚀 --> majorityElement --> max:", max);

  return max;
};

// const nums = [3,2,3]

const nums = [2, 2, 1, 1, 1, 2, 2];

const res = majorityElement(nums);
console.log("🚀 --> res:", res);
