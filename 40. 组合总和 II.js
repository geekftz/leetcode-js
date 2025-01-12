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
  // 排序 candidates 递增
  candidates = candidates.sort(function (a, b) {
    return a - b;
  });
  console.log("🚀 --> 初始 candidates:", candidates);

  const used = {};

  function uniqueArray2D(arr) {
    let set = new Set(arr.map((item) => JSON.stringify(item)));

    return Array.from(set).map((item) => JSON.parse(item));
  }

  function loop(path, candidates, target, res, idx) {
    // console.log("🚀 --> file: 40. 组合总和 II.js:47 --> loop --> path:", path);
    // console.log("🚀 --> file: 40. 组合总和 II.js:47 --> loop --> idx:", idx);
    const pathValue = path.reduce((acc, cur) => acc + cur, 0);

    if (pathValue === target) {
      res.push(path.slice().sort((a, b) => a - b));
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      const c = candidates[i];
      // console.log("🚀 --> file: 39. 组合总和.js:41 --> loop --> c:", c);
      if (i > idx && c === candidates[i - 1]) {
        continue;
      }

      // 累加超过目标值，或者，曾经使用过，则跳过
      if (pathValue + c > target || used[i] === true) {
        continue;
      }

      used[i] = true;
      path.push(c);
      loop(path, candidates.slice(), target, res, i + 1);

      used[i] = false;
      path.pop();
    }
  }

  const res = [];

  loop([], candidates, target, res, 0);

  return uniqueArray2D(res);
};

// var combinationSum2 = function (candidates, target) {
//   let res = [];
//   let path = [];
//   //去重需要排序
//   candidates.sort();

//   const dd = function (sum, index) {
//     if (sum > target) {
//       return;
//     }

//     if (sum == target) {
//       res.push([...path]);
//       return;
//     }

//     for (let i = index; i < candidates.length; i++) {
//       //同一层中，重复的值不再调用
//       if (i > index && candidates[i] == candidates[i - 1]) {
//         continue;
//       }
//       path.push(candidates[i]);
//       sum += candidates[i];
//       dd(sum, i + 1); //下一层，起始值去掉当前值
//       path.pop();
//       sum -= candidates[i];
//     }
//   };
//   dd(0, 0);
//   return res;
// };

// const candidates = [10, 1, 2, 7, 6, 1, 5];
const candidates = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const target = 10;

const result = combinationSum2(candidates, target); // [[1,1,1,5],[1,1,3,3],[3,5]]

console.log("🚀 --> file: 40. 组合总和 II.js:78 --> result:", result);
