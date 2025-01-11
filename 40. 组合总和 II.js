// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]

// 提示:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  function loop(path, candidates, target, res) {
    console.log("candidates: ", candidates);
    const pathValue = path.reduce((acc, cur) => acc + cur, 0);

    if (pathValue === target) {
      // console.log("🚀 --> file: 39. 组合总和.js:39 --> loop --> path:", path);
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      const c = candidates[i];
      // console.log("🚀 --> file: 39. 组合总和.js:41 --> loop --> c:", c);

      if (pathValue + c > target) {
        continue;
      }

      path.push(c);
      loop(path, [...candidates.splice(i, 1)], target, res);
      path.pop();
    }
  }

  const res = [];

  loop([], candidates, target, res);

  return res;
};

const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

const result = combinationSum2(candidates, target);
console.log("🚀 --> file: 40. 组合总和 II.js:78 --> result:", result);
