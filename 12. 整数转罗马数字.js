// 七个不同的符号代表罗马数字，其值如下：

// 符号	值
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// 罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：

// 如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
// 如果该值以 4 或 9 开头，使用 减法形式，表示从以下符号中减去一个符号，例如 4 是 5 (V) 减 1 (I): IV ，9 是 10 (X) 减 1 (I)：IX。仅使用以下减法形式：4 (IV)，9 (IX)，40 (XL)，90 (XC)，400 (CD) 和 900 (CM)。
// 只有 10 的次方（I, X, C, M）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加 5 (V)，50 (L) 或 500 (D)。如果需要将符号附加4次，请使用 减法形式。
// 给定一个整数，将其转换为罗马数字。



// 示例 1：

// 输入：num = 3749

// 输出： "MMMDCCXLIX"

// 解释：

// 3000 = MMM 由于 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC 由于 500 (D) + 100 (C) + 100 (C)
//   40 = XL 由于 50 (L) 减 10 (X)
//    9 = IX 由于 10 (X) 减 1 (I)
// 注意：49 不是 50 (L) 减 1 (I) 因为转换是基于小数位
// 示例 2：

// 输入：num = 58

// 输出："LVIII"

// 解释：

// 50 = L
//  8 = VIII
// 示例 3：

// 输入：num = 1994

// 输出："MCMXCIV"

// 解释：

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV


// 提示：

// // 1 <= num <= 3999

// 写一个方法，输入是数字，获得千分位

function getDigit(num, digit) {
  // 先取绝对值，防止负数干扰
  const numStr = num.toString();
  const len = numStr.length;

  const index = len - digit;
  return parseInt(numStr[index], 10);
}


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // 判断几位数

  let res = ""

  // 处理千分位
  const thousandsDigit = getDigit(num, 4)
  res += "M".toString().repeat(thousandsDigit)

  // 处理百分位
  const hundredsDigit = getDigit(num, 3)

  if (hundredsDigit === 4) {
    res += "CD"
  } else if (hundredsDigit === 9) {
    res += "CM"
  } else if (hundredsDigit >= 5) {
    res += "D" + "C".repeat(hundredsDigit - 5)
  } else {
    res += "C".repeat(hundredsDigit)
  }

  // 处理十分位
  const tenthsDigit = getDigit(num, 2)

  if (tenthsDigit === 4) {
    res += "XL"
  } else if (tenthsDigit === 9) {
    res += "XC"
  } else if (tenthsDigit >= 5) {
    res += "L" + "X".repeat(tenthsDigit - 5)
  } else {
    res += "X".repeat(tenthsDigit)
  }

  // 处理十分位
  const onesDigit = getDigit(num, 1)

  if (onesDigit === 4) {
    res += "IV"
  } else if (onesDigit === 9) {
    res += "IX"
  } else if (onesDigit >= 5) {
    res += "V" + "I".repeat(onesDigit - 5)
  } else {
    res += "I".repeat(onesDigit)
  }

  return res
};

const input = "3749";

const result = intToRoman(input);
console.log('🚀 --> file: 12. 整数转罗马数字.js:95 --> result:', result);
