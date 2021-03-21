/*
 * @Author: hackftz
 * @Date: 2021-03-20 00:40:42
 * @LastEditTime: 2021-03-20 00:41:45
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 05. 替换空格.js
 */
// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

// 限制：

// 0 <= s 的长度 <= 10000

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/\s/g, '%20');
};

var s = 'We are happy.';

var res = replaceSpace(s);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
