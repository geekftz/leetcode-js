// 二分法求整数的平方根
function mySqrt(x) {
  if (x < 2) {
    return x;
  }
  let left = 1;
  let mid = null;
  let right = Math.floor(x / 2);

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      left = mid + 1;
    }

    if (mid * mid > x) {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left < right ? left : right;
}

var x = 1978959248;

console.time();
var res = mySqrt(x);
console.timeEnd();
console.log('%c%s', 'color: #cc7033', res);
