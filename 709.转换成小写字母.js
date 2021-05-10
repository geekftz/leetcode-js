/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  var i = str.length - 1;
  var Z = 'Z'.charCodeAt();
  var A = 'A'.charCodeAt();

  while (i >= 0) {
    var char = str[i].charCodeAt()

    if (char >= A && char <= Z) {
      str = replaceChar(str, i, char)
    }
    i--
  }

  return str
};

var replaceChar = (str, i, char) => {
  var firstHalf = str.substring(0, i)
  var secondHalf = str.substring(i + 1, str.length)
  var changeChar = String.fromCharCode(char + 32)

  return firstHalf + changeChar + secondHalf
}


var str = 'HEllo'

var res = toLowerCase(str)
console.log('%c%s', 'color: #cc7033', res);




// @lc code=end

