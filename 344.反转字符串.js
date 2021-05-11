/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var i = 0;
  var j = s.length - 1;

  if (i === j) {
    return s;
  }

  while (i < j) {
    swap(s, i, j);

    i++;
    j--;
  }

  return s;
};

var swap = (arr, i, j) => {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var s = ['h', 'e', 'l', 'l', 'o'];

var res = reverseString(s);
console.log('%c res ⧭', 'color: #007300', res);

// @lc code=end
