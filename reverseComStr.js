// function reverseComStr(str) {
//   let res = "";

//   for (const char of str) {
//     console.log("%c%s", "color: #99adcc", char);
//     if (char !== ".") {
//       res = char + res;
//     }
//   }

//   return res;
// }

function reverseComStr(input) {
  let res = ''; // 结果字符串
  let temp = ''; // 临时存取字符串

  for (const char of str) {
    if (char !== '.') {
      temp = temp + char;
      console.log('%c%s', 'color: #994d75', temp);
    } else {
      res = res + '.' + temp;
      temp = '';
    }
  }
  console.log('%c%s', 'color: #e5de73', temp);

  return temp + res;
}

var str = 'ab.cd.ef';

var res = reverseComStr(str);
console.log('%c%s', 'color: #735656', res);
