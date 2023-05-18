// 请你编写一个函数，它接收一个其他的函数，并返回该函数的 柯里化 后的形式。

// 柯里化 函数的定义是接受与原函数相同数量或更少数量的参数，并返回另一个 柯里化 后的函数或与原函数相同的值。

// 实际上，当你调用原函数，如 sum(1,2,3) 时，它将调用 柯里化 函数的某个形式，如 csum(1)(2)(3)， csum(1)(2,3)， csum(1,2)(3)，或 csum(1,2,3) 。所有调用 柯里化 函数的方法都应该返回与原始函数相同的值。

//

// 示例 1：

// 输入：
// fn = function sum(a, b, c) { return a + b + c; }
// inputs = [[1],[2],[3]]
// 输出：6
// 解释：
// 执行的代码是：
// const curriedSum = curry(fn);
// curriedSum(1)(2)(3) === 6;
// curriedSum(1)(2)(3) 应该返回像原函数 sum(1, 2, 3) 一样的值。
// 示例 2：

// 输入：
// fn = function sum(a, b, c) { return a + b + c; }
// inputs = [[1,2],[3]]]
// 输出：6
// 解释：
// curriedSum(1, 2)(3) 应该返回像原函数 sum(1, 2, 3) 一样的值。
// 示例 3：

// 输入：
// fn = function sum(a, b, c) { return a + b + c; }
// inputs = [[],[],[1,2,3]]
// 输出：6
// 解释：
// 你应该能够以任何方式传递参数，包括一次性传递所有参数或完全不传递参数。
// curriedSum()()(1, 2, 3) 应该返回像原函数 sum(1, 2, 3) 一样的值。
// 示例 4：

// 输入：
// fn = function life() { return 42; }
// inputs = [[]]
// 输出：42
// 解释：
// 柯里化一个没有接收参数，没做有效操作的函数。
// curriedLife() === 42
//

// 提示：

// 1 <= inputs.length <= 1000
// 0 <= inputs[i][j] <= 105
// 0 <= fn.length <= 1000
// inputs.flat().length == fn.length
// 函数参数需要被显式定义

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  let argsLen = fn.length;
  // console.log("🚀 --> curry --> argsLen:", argsLen);
  let cacheArgs = [];

  return function curried() {
    let args = Array.from(arguments);

    cacheArgs = cacheArgs.concat(args);

    if (cacheArgs.length === argsLen) {
      return fn.apply(null, cacheArgs);
    } else {
      return curried;
    }
  };
};

function sum(a, b) {
  return a + b;
}

const csum = curry(sum);
const res = csum(1)(2); // 3
console.log("🚀 --> res:", res);
