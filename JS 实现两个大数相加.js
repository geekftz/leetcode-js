/*
 * @Author: hackftz
 * @Date: 2021-03-21 02:29:14
 * @LastEditTime: 2021-03-21 09:54:37
 * @LastEditors: hackftz
 * @FilePath: /let-code/JS 实现两个大数相加.js
 */

// 字符串处理
// padStart补位

let a = '9007199254740991';
let b = '1234567899999999999';

function add(a, b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength, 0); //"0009007199254740991"
  b = b.padStart(maxLength, 0); //"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0; // 指针
  let f = 0; //"进位"
  let sum = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f == 1) {
    sum = '1' + sum;
  }
  return sum;
}

var res = add(a, b); //结果为：1243575099254740990
console.log('%c%s', 'color: #cc0088', typeof res);
