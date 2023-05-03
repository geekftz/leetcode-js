// LCP 06. 拿硬币
// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。

/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    count += Math.ceil(coin / 2) + 1;
  }

  return count;
};

var res = minCount([4, 2, 1]);
console.log('🚀 ~ file: ez-minCount.js ~ line 21 ~ res', res);
