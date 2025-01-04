// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]

// 提示：

// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。

const getCharsByNum = (num) => {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  return map[num];
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  let res = [""];

  const charsArr = [];

  for (let i = 0; i < digits.length; i++) {
    const num = digits[i];
    const chars = getCharsByNum(num);
    charsArr.push(chars);
  }

  for (let i = 0; i < charsArr.length; i++) {
    const chars = charsArr[i];

    const newRes = [];

    for (let j = 0; j < res.length; j++) {
      for (let k = 0; k < chars.length; k++) {
        newRes.push(res[j] + chars[k]);
      }
    }

    res = newRes;
  }

  return res;
};

const input = "2345";
const result = letterCombinations(input);
console.log("🚀 --> file: 17. 电话号码的字母组合.js:65 --> result:", result);
