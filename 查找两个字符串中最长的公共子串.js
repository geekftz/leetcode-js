/*
 * @Author: hackftz
 * @Date: 2021-03-21 14:02:09
 * @LastEditTime: 2021-03-21 17:10:06
 * @LastEditors: hackftz
 * @FilePath: /let-code/js查找两个字符串中最长的公共子串.js
 */

// function find(str1, str2) {
//   //二维数组
//   let temp = [];
//   // 最大子串长度
//   let max = 0;
//   // 最大子串末位index
//   let index = null;

//   const len1 = str1.length;
//   const len2 = str2.length;

//   for (let i = 0; i < len1; i++) {
//     temp[i] = [];

//     for (let j = 0; j < len2; j++) {
//       // 比较两个位置是否相等
//       // 相等就将让temp[i][j]相对于temp[i-1][j-1]加一（前提是temp[i-1][j-1]存在）
//       if (str1.charAt(i) === str2.charAt(j)) {
//         if (i > 0 && j > 0 && temp[i - 1][j - 1] > 0) {
//           temp[i][j] = temp[i - 1][j - 1] + 1;
//         } else {
//           temp[i][j] = 1;
//         }
//         //保存当前temp中最大的数字，并
//         if (max < temp[i][j]) {
//           max = temp[i][j];
//           index = i;
//         }
//       } else {
//         temp[i][j] = 0;
//       }
//     }
//   }
//   console.log(max + '+' + index);
//   console.table(temp);
//   return str1.substr(index - max + 1, max);
// }

// var res = find('wdw32efew4332', 'efer32e2wd2332');

var find = function (str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  let arr = []; // 二维数组
  let lastIndex = 0; // 最大子串末位index
  let max = 0;

  for (let i = 0; i < len1; i++) {
    arr[i] = [];

    for (let j = 0; j < len2; j++) {
      if (str1.charAt(i) === str2.charAt(j)) {
        if (i > 0 && j > 0 && arr[i - 1][j - 1] > 0) {
          arr[i][j] = arr[i - 1][j - 1] + 1;
        } else {
          arr[i][j] = 1;
        }

        if (max < arr[i][j]) {
          max = arr[i][j];
          lastIndex = i;
        }
      } else {
        arr[i][j] = 0;
      }
    }
  }

  return str1.substr(lastIndex - max + 1, max);
};

var res = find("aaaX3333--", "baa333cc3333xX3333");
console.log("%c%s", "color: #e5de73", res);
