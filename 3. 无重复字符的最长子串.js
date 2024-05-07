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

  let rk = -1,
    ans = 0;

  for (let i = 0; i < n; ++i) {
    console.log(i);
  }
};

const s = "au";

const res = lengthOfLongestSubstring(s);
console.log("🚀 --> res:", res);
