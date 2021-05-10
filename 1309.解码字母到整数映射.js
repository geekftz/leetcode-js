/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  var transformObj = getTransformObj();
  let i = (j = s.length - 1);

  while (i >= 0) {
    i--;
  }
};

var getTransformObj = function () {
  var obj = {};
  for (var i = 0; i < 26; i++) {
    var utf16 = String.fromCharCode(97 + i);

    if (i < 9) {
      obj[utf16] = i + '';
      obj[i + ''] = utf16;
    } else {
      obj[utf16] = i + '#';
      obj[i + '#'] = utf16;
    }
  }

  return obj;
};

var obj = getTransformObj();
console.log('%c getTransformObj obj ⧭', 'color: #1d5673', obj);

var s = '10#11#12';

var res = freqAlphabets(s);

console.log('res: ', res);

// @lc code=end
