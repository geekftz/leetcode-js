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
      console.log(
        "🚀 --> file:  5. 最长回文子串.js:66 --> expandAroundCenter --> i:",
        i
      );
      console.log(
        "🚀 --> file: 5. 最长回文子串.js:66 --> expandAroundCenter --> j:",
        j
      );
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
    console.log("====================================");
    const oddLen = expandAroundCenter(s, i, i);
    console.log(
      "🚀 --> file: 5. 最长回文子串.js:65 --> longestPalindrome --> oddLen:",
      oddLen
    );
    // 判断是偶回文串
    // const evenLen = expandAroundCenter(s, i, i + 1);

    // const curMaxLen = Math.max(oddLen, evenLen);

    // if (curMaxLen > maxLen) {
    //   maxLen = curMaxLen;
    //   begin = i;
    // }
  }

  return s.substring(begin, begin + maxLen);
};

var s = "babad";

const res = longestPalindrome(s);
console.log("🚀 --> file: 5. 最长回文子串.js:11 --> res:", res);

// const res1 = validPalindromic("bab", 0, 2);
// console.log("🚀 --> file: 5. 最长回文子串.js:29 --> res1:", res1);
