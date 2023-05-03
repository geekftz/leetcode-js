// 771. 宝石与石头
//  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

// const jewelsSet = new Set(jewels.split(''));
// return stones.split('').reduce((prev, val) => {
//   return prev + jewelsSet.has(val);
// }, 0);

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// var numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let item of stones) {
//     if (jewels.includes(item)) count++;
//   }

//   return count;
// };
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels.split(''));
  return stones.split('').reduce((prev, val) => {
    return prev + jewelsSet.has(val);
  }, 0);
};

let J = 'aA',
  S = 'aAAbbbb';

console.time();
for (let i = 0; i < 1000; i++) {
  numJewelsInStones(J, S);
}
console.timeEnd();
