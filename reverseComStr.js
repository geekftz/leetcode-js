function reverseComStr(input) {
  let res = ""; // 结果字符串
  let temp = ""; // 临时存取字符串

  for (const char of str) {
    if (char !== ".") {
      temp = temp + char;
    } else {
      res = res + "." + temp;
      temp = "";
    }
  }

  return temp + res;
}

var str = "ab.cd.ef";

var res = reverseComStr(str);
console.log("%c%s", "color: #735656", res);
