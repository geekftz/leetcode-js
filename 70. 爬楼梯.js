// 斐波那契 爬梯子

function climbStairs(n) {
  const cache = [0, 1, 2];

  return count(n, cache);
}

// function count(n, cache) {
//   if (n <= 2) {
//     return cache[n];
//   }

//   if (cache[n]) {
//     return cache[n];
//   }

//   cache[n] = count(n - 1, cache) + count(n - 2, cache);

//   return cache[n];
// }

// const res = climbStairs(10);

// #########################

function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let prev = 1;
  let cur = 2;
  let curN = 3;

  while (curN <= n) {
    let recordCur = cur;
    cur = prev + cur;
    prev = recordCur;

    curN++;
  }

  return cur;
}

console.time();
const res = climbStairs(100);
console.timeEnd();

console.log("%c%s", "color: #ffcc00", res);
