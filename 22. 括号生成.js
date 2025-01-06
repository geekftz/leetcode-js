// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// 提示：

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 一共可以填n*2个
  const m = n * 2;
  let res = [];
  const path = new Array(m);

  /**
   *
   * @param {*} i 已经填入的括号, 或者是path数组i的下标，当前要填入的位置下标
   * @param {*} leftFilledNum 已经填入的左括号个数
   * @returns
   */
  const dfs = (i, leftFilledNum) => {
    if (i === m) {
      const r = path.join("");
      res.push(r);
      return;
    }

    if (leftFilledNum < n) {
      path[i] = "(";
      dfs(i + 1, leftFilledNum + 1);
    }

    // 当前填入的总数减去已经填入左括号的数量，是右括号的数量，如果已经填入的右括号的数量小于左括号的数量，说明需要填入右括号
    if (i - leftFilledNum < leftFilledNum) {
      path[i] = ")";
      dfs(i + 1, leftFilledNum);
    }
  };

  dfs(0, 0);

  return res;
};

const input = 3;
const result = generateParenthesis(input);
console.log("🚀 --> file: 22. 括号生成.js:48 --> result:", result);
