/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  let prev = 1;
  let cur = 1;
  let curN = 3;

  while (curN <= n) {
    let recordCur = cur;
    cur = prev + cur;
    prev = recordCur;

    curN++;
  }

  return cur;
};
