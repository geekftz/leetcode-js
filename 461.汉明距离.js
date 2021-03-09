/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0;
  let xs = x.toString(2);
  let ys = y.toString(2);

  if (xs.length > ys.length) {
    ys = '0'.repeat(xs.length - ys.length) + ys;
  } else {
    xs = '0'.repeat(ys.length - xs.length) + xs;
  }

  xs = xs.split('');
  ys = ys.split('');

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] !== ys[i]) {
      count++;
    }
  }

  return count;
};

var hammingDistance1 = function (x, y) {
  let ans = 0;
  while (x !== 0 || y !== 0) {
    if ((x & 1) !== (y & 1)) {
      ans++;
    }
    x >>= 1;
    y >>= 1;
  }
  return ans;
};

(x = 1), (y = 4);

var res = hammingDistance(x, y);
console.log('🚀 ~ file: 461.汉明距离.js ~ line 23 ~ res', res);
// @lc code=end
