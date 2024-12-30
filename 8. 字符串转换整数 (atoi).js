
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const sn = s.length;

  let i = 0
  let flag = true
  let res = ''

  while (i < sn) {
    // if (s[i] === ' ') {


    // }

    // if (s[i] === '+') {
    //   flag = true

    // }

    // if (s[i] === '-') {
    //   flag = false

    // }



    if ((/[0-9]/).test(parseInt(s[i]))) {
      console.log('🚀 --> file: 8. 字符串转换整数 (atoi).js:30 --> myAtoi --> s[i]:', s[i]);

      res += s[i]
    }

    i += 1
    console.log('🚀 --> file: 8. 字符串转换整数 (atoi).js:36 --> myAtoi --> i:', i);

  }

  return res
};

const input = "   -042"
const res = myAtoi(input)
console.log('🚀 --> file: 8. 字符串转换整数 (atoi).js:36 --> res:', res);
