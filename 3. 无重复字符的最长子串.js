// 3. 无重复字符的最长子串
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长
// 子串
//  的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

// =================================================================

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const n = s.length;

//   if (n <= 1) {
//     return n;
//   }

//   let str = "";
//   let maxStr = "";

//   let i = 0;
//   let j = 0;

//   while (i < n) {
//     while (j < n) {
//       // s[i] 为 开头字符
//       if (i === j) {
//         str = s[j];
//       } else {
//         if (str.indexOf(s[j]) === -1) {
//           str = str + s[j];
//           maxStr = maxStr.length > str.length ? maxStr : str;
//         } else {
//           maxStr = maxStr.length > str.length ? maxStr : str;

//           str = "";
//           break;
//         }
//       }

//       j++;
//     }

//     i++;
//     j = i;
//   }

//   return maxStr.length;
// };

// const s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  const occ = new Set();
  const n = s.length;

  let rk = 0;
  ans = 0;

  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      occ.delete(s.charAt(i - 1));
    }

    while (rk < n && !occ.has(s.charAt(rk))) {
      occ.add(s.charAt(rk));
      ++rk;
    }

    ans = Math.max(ans, rk - i);
  }

  return ans;
};

// const s = "au";
const s = "pwwkew";

const res = lengthOfLongestSubstring(s);
console.log("🚀 --> res:", res);
