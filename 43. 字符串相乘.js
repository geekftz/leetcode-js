// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。



// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"


// 提示：

// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。
// num1 和 num2 都不包含任何前导零，除了数字0本身。


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {


  const len1 = num1.length
  const len2 = num2.length

  let i = len1 - 1;
  let j = len2 - 1;
  let flag = false;
  let res = ''

  while (j >= 0) {
    const a = Number(num1[i])
    const b = Number(num2[j])
    // let newStr = str.slice(0, index) + newChar + str.slice(index + 1);
    const temp = a * b
    console.log('🚀 --> multiply --> temp:', temp);

    if (temp >= 10) {
      flag = true
    }


    j--
  }

};

// const num1 = "2", num2 = "3";
const num1 = "123", num2 = "456";


const result = multiply(num1, num2)
console.log('🚀 --> result:', result);
