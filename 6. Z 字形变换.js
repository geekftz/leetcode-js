// 6. Z 字形变换
// 中等
// 相关标签
// 相关企业
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

// =================================================================

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//   if (numRows === 1) {
//     return s
//   }

//   const res = [];
//   let j = 0;
//   let flag = true
//   const sn = s.length

//   for (let i = 0; i < sn; i++) {
//     const si = s[i];

//     if (!res[j]) {
//       res[j] = []
//     }

//     res[j].push(si)

//     j = flag ? (j + 1) : (j - 1)

//     // 触底
//     if (j === (numRows - 1)) {
//       flag = false
//     }

//     if (j === 0) {
//       flag = true
//     }


//   }


//   let r = ''

//   const rn = res.length

//   for (let l = 0; l < rn; l++) {
//     const rs = res[l].join('')

//     r += rs
//   }

//   return r
// };
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }

  const res = [];
  let j = 0;
  let flag = true
  const sn = s.length

  for (let i = 0; i < sn; i++) {
    const si = s[i];

    if (!res[j]) {
      res[j] = ''
    }

    res[j] += si

    j = flag ? (j + 1) : (j - 1)

    // 触底
    if (j === (numRows - 1)) {
      flag = false
    }

    if (j === 0) {
      flag = true
    }


  }


  let r = ''

  const rn = res.length

  for (let l = 0; l < rn; l++) {
    const rs = res[l]
    r += rs
  }

  return r
};

const result = convert('PAYPALISHIRING', 3)
console.log('🚀 --> file: 6. Z 字形变换.js:111 --> result:', result);

// const input = "jclvlazamucimicnewdoxjlfuemdadgkhufsuevjaxrnivcorhfrqqwnujquoyevslqprlyskrhunljgsoxleuyyfqutozqhmgyetyyepfaesjlkzivdevdllygazxjndjrxhrdyyddqnqdoayshwxshxzjywumbffamxdnxjqoyirmirernekxdlicjfqkkvnxuqmszcixmzkwsqoiwyfalpeuuugfrteomqinuqnirxelpstosaodqszkogrfbxtnpdbltqtmpyyeqtujuiokcowswqyxntndxqqsgkhvihbaawjugagloddktdjizynyoesuozryityjrifximkyrokktvusuiqiojfckyatryekijksvusokcyeavwufpctajxkixdbxjmitwcqqxfbbfhbadvfuaaujxfrwkvuuhepdifvfkyhsfiuleafgaapahjwtesplweqfmnmymtqreleinkopmfpvomqueghdmxkynwxzqnswaxgnjwdxbuusgkmnqwqdvadiwahoqakqzqgkmlhqfdimnwzgsplorownpgehioxhhfrvqalwdtksslykajataxgpdmyldxukdnftprrumbmemlrowrhwoqntclghlcrorzhgsbaecplpccdyvnxmdmfhaoplqizkhiqbjtimitdkxiksxjecwmkwabhslievqvwcqeqaztkydwrbgxdcjpalshgepkzhhv"

// const numRows = 352

// const result = convert(input, numRows)