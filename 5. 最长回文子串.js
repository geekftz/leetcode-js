const validPalindromic = (str, left, right) => {
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;

  let max = 1;
  let begin = 0;

  // 奇串和偶串
  for (var i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (j - i + 1 > max && validPalindromic(s, i, j)) {
        max = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + max);
};

var s = "babad";

const res = longestPalindrome(s);
console.log("🚀 --> file: 5. 最长回文子串.js:11 --> res:", res);

// const res1 = validPalindromic("bab", 0, 2);
// console.log("🚀 --> file: 5. 最长回文子串.js:29 --> res1:", res1);
