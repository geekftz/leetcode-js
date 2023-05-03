/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const res = [];
  const depth = nums.length;
  const path = [];

  const loop = (used) => {
    if (path.length === depth) {
      res.push(Array.from(path));
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (used[i]) {
          continue;
        }

        path.push(nums[i]);
        used[i] = true;

        loop(used);

        path.pop();
        used[i] = false;
      }
    }
  };

  loop([]);

  return res;
};

const nums = [1, 2, 3];
const res = permute(nums);
console.log("🚀 --> res:", res);
