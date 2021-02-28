// 1431. 拥有最多糖果的孩子
// 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map(item => item + extraCandies >= Math.max(...candies));
};

let candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

console.time();

var res = kidsWithCandies(candies, extraCandies);

console.timeEnd();

console.log('🚀 ~ file: ez-kidsWithCandies.js ~ line 19 ~ res', res);
