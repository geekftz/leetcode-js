/*
 * @Author: hackftz
 * @Date: 2021-03-20 23:39:08
 * @LastEditTime: 2021-03-20 23:59:30
 * @LastEditors: hackftz
 * @FilePath: /let-code/shuffle.js
 */

// 打乱数组顺序
// 最完美的解决办法 -- Fisher–Yates shuffle 洗牌算法

function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i);
    i--;
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

var res = shuffle(arr);

console.log('%c⧭', 'color: #00e600', res);
