/*
 * @Author: hackftz
 * @Date: 2021-03-20 00:26:19
 * @LastEditTime: 2021-03-20 00:37:28
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 17. 打印从1到最大的n位数.js
 */
// 剑指 Offer 17. 打印从1到最大的n位数
// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

// 示例 1:

// 输入: n = 1
// 输出: [1,2,3,4,5,6,7,8,9]

// 说明：

// 用返回一个整数列表来代替打印
// n 为正整数

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  return new Array(Math.pow(10, n) - 1).fill(0).map((v, i) => i + 1);
};

var n = 2; // n = 1 => 9 ; n = 2 => 99 ; n = 3 => 999
var res = printNumbers(n);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
