/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var res = [];
  while (left <= right) {
    if (dividingNumbers(left)) {
      res.push(left);
    }
    left++;
  }
  return res;
};

var dividingNumbers = num => {
  var numStr = num.toString();
  console.log('%c%s', 'color: #aa00ff', numStr);
  var nums = numStr.split('').map(v => +v);
  console.log('%c⧭', 'color: #733d00', nums);
  var flag = true;

  for (let i = 0; i < nums.length; i++) {
    console.log('num % nums[i]', num % nums[i]);
    if (num % nums[i] !== 0) {
      flag = false;
    }
  }

  console.log('%c flag %s', 'color: #00bf00', flag);
  return flag;
};

var left = 1,
  right = 22;

var res = selfDividingNumbers(left, right);

console.log('res: ', res);

// @lc code=end
