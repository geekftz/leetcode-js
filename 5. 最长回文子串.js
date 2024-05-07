// 5. 最长回文子串
// 已解答
// 中等
// 相关标签
// 相关企业
// 提示
// 给你一个字符串 s，找到 s 中最长的回文
// 子串
// 。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

// =================================================================

// 暴力解法
// const validPalindromic = (str, left, right) => {
//   while (left < right) {
//     if (str.charAt(left) !== str.charAt(right)) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   const n = s.length;

//   let max = 1;
//   let begin = 0;

//   // 奇串和偶串
//   for (var i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (j - i + 1 > max && validPalindromic(s, i, j)) {
//         max = j - i + 1;
//         begin = i;
//       }
//     }
//   }

//   return s.substring(begin, begin + max);
// };

const expandAroundCenter = (s, i, j) => {
  let len = s.length;

  while (i >= 0 && j < len) {
    if (s.charAt(i) === s.charAt(j)) {
      i--;
      j++;
    } else {
      break;
    }
  }

  return j - i - 1;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;

  let begin = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    // 判读是奇回文串
    const oddLen = expandAroundCenter(s, i, i);

    // 判断是偶回文串
    const evenLen = expandAroundCenter(s, i, i + 1);
    console.log(
      "🚀 --> file: 5. 最长回文子串.js:67 --> longestPalindrome --> evenLen:",
      evenLen
    );

    const curMaxLen = Math.max(oddLen, evenLen);

    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      begin = i - Math.floor((maxLen - 1) / 2);
    }
  }

  return s.substring(begin, begin + maxLen);
};

var s = "cbbd";

const res = longestPalindrome(s);
console.log("🚀 --> file: 5. 最长回文子串.js:11 --> res:", res);

// const res1 = validPalindromic("bab", 0, 2);
// console.log("🚀 --> file: 5. 最长回文子串.js:29 --> res1:", res1);
