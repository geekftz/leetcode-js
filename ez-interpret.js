// 1678. 设计 Goal 解析器
// 请你设计一个可以解释字符串 command 的 Goal 解析器 。command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。然后，按原顺序将经解释得到的字符串连接成一个字符串。

// 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let len = command.length;
  var res = '';
  for (var i = 0; i < len; i++) {
    if (command[i] == 'G') {
      ans += 'G';
    } else if (command[i] === '(') {
      if (command[i + 1] === ')') {
        ans += 'o';
        i++;
      } else {
        ans += 'al';
        i += 3;
      }
    }
  }
  return res;
};

command = '(al)G(al)()()G';

console.time();
for (let i = 0; i < 1000000; i++) {
  var res = interpret(command);
}
console.timeEnd();
console.log('🚀 ~ file: ez-interpret.js ~ line 44 ~ res', res);
