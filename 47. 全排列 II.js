/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  // debugger;
  console.log("🚀 --> permuteUnique --> nums:", nums);
  const res = [];
  const depth = nums.length;
  const path = [];
  const used = new Array(depth).fill(false);
  console.log("🚀 --> permuteUnique --> used:", used);

  const loop = (used) => {
    if (path.length === depth) {
      res.push(Array.from(path));
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (
          used[i] ||
          // i > 0 重复数组 长度大于等于2
          // nums[i] === nums[i - 1] 已经排好序了 如果同级下与前一个值相同，说明子树也是会完全重复
          // used[i - 1] === false 同级下，前一个重复值刚刚递归完，used值刚被重置为false
          (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false)
        ) {
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

  loop(used);

  return res;
};

// var permuteUnique = function (nums) {
//   const ans = [];
//   const vis = new Array(nums.length).fill(false);
//   const backtrack = (idx, perm) => {
//     if (idx === nums.length) {
//       ans.push(perm.slice());
//       return;
//     }
//     for (let i = 0; i < nums.length; ++i) {
//       if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
//         continue;
//       }
//       perm.push(nums[i]);
//       vis[i] = true;
//       backtrack(idx + 1, perm);
//       vis[i] = false;
//       perm.pop();
//     }
//   };
//   nums.sort((x, y) => x - y);
//   backtrack(0, []);
//   return ans;
// };

nums = [3, 3, 0, 3];

res = permuteUnique(nums);
debugger;

console.log(res);
