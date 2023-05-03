/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 大数相加
var addStrings = function (a, b) {
  let maxLength = Math.max(a.length, b.length);
  //用0去补齐长度
  a = a.padStart(maxLength, 0); //"0009007199254740991"
  b = b.padStart(maxLength, 0); //"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0; // 指针
  let f = 0; //"进位"
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f == 1) {
    sum = "1" + sum;
  }
  return sum;
};
