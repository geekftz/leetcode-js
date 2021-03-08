/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(v => v.reverse().map(w => +!w));
};

var image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

var res = flipAndInvertImage(image);
console.log('🚀 ~ file: 832.翻转图像.js ~ line 20 ~ res', res);
// @lc code=end
