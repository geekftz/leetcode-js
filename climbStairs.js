// 斐波那契 爬梯子

function climbStairs(n) {
  console.log('%c%s', 'color: #408059', n);
  const cache = [0, 1, 2];

  return count(n, cache);
}

function count(n, cache) {
  if (n <= 2) {
    return cache[n];
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = count(n - 1, cache) + count(n - 2, cache);

  return cache[n];
}

const res = climbStairs(100);

console.log('%c%s', 'color: #ffcc00', res);
