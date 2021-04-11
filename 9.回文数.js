/*
 * @Author: hackftz
 * @Date: 2021-03-21 10:02:07
 * @LastEditTime: 2021-03-21 10:18:37
 * @LastEditors: hackftz
 * @FilePath: /let-code/9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  // 首先获取当前数量级n，公式 n=10^{\left \lfloor\log_{10}{x}\right\rfloor}n=10 ⌊log 10x⌋，如：x = 24, n = 10; x = 6234, n = 1000。

  // let n = 10 ** Math.floor(Math.log10(x));

  // 数字位数
  let n = Math.pow(10, Math.floor(Math.log10(x)));

  while (n > 1 && x > 0) {
    // 通过x / n 获取首位。
    let first = Math.floor(x / n);
    // 通过x % 10 获取末位。
    let last = x % 10;

    // 判断首位是否相等
    if (first !== last) {
      return false;
    }

    // (x % n) / 10 去除首位和末位，（x % n去除首位，x / 10去除末位），x 位数减 2
    x = Math.floor((x % n) / 10);

    // n /= 100 x 位数减 2， 故n需要除 10^2。
    n /= 100;
  }

  return true;
};

var x = 4334;
var res = isPalindrome(x);
console.log("%c%s", "color: #cc0036", res);
// @lc code=end
