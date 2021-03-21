/*
 * @Author: hackftz
 * @Date: 2021-03-20 14:15:37
 * @LastEditTime: 2021-03-20 15:54:28
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 57 - II. 和为s的连续正数序列.js
 */

// 剑指 Offer 57 - II. 和为s的连续正数序列
// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

// 限制：

// 1 <= target <= 10^5

/**
 * @param {number} target
 * @return {number[][]}
 */
// var findContinuousSequence = function (target) {
//   var half = Math.ceil(target / 2);
//   let arr = [];
//   let res = [];

//   let init = 1;
//   let i = init;
//   let sum = 0;

//   while (i <= half) {
//     arr.push(i);

//     sum += i;

//     if (sum > target) {
//       arr = [];
//       sum = 0;
//       i = ++init;
//     } else if (sum === target) {
//       res.push(arr);
//       arr = [];
//       sum = 0;
//       i = ++init;
//     } else {
//       if (i === half) {
//         arr = [];
//         sum = 0;
//         i = ++init;
//       } else {
//         i++;
//       }
//     }
//   }

//   return res;
// };

var findContinuousSequence = function (target) {
  var max = Math.ceil(target / 2);
  let res = [];
  let arr = [];
  let sum = 0;

  for (let i = 1; i <= max; i++) {
    arr.push(i);
    sum += i;

    while (sum > target) {
      sum -= arr.shift();
    }

    if (sum === target) {
      res.push(arr.slice(0));
    }
  }

  return res;
};

var target = 9;

var res = findContinuousSequence(target);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
