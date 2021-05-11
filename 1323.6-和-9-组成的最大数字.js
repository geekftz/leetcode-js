/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  if (num === 9999) {
    return num;
  }

  let numStr = num.toString();
  let len = numStr.length;

  let i = 0;

  while (i < len) {
    console.log(numStr[i]);
    if (numStr[i] === '6') {
      console.log('%c%s', 'color: #731d6d', numStr.substring(0, i - 1));
      numStr = numStr.substring(0, i) + '9' + numStr.substring(i + 1, len);
      break;
    }
    i++;
  }

  return Number(numStr);
};

var num = 9669;

var res = maximum69Number(num);
console.log('%c res %s', 'color: #006dcc', res);

// @lc code=end
