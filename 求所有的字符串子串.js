// 输入：ABCD，
// 返回：ABCD，ABC，BCD，AB，BC，CD，A，B，C，D

// const getAllStr = (str) => {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       // result.push(str.slice(i, j))
//       result.push(str.substring(i, j));
//     }
//   }
//   return result;
// };

const getAllStr = (str) => {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const s = str.slice(i, j);
      console.log("🚀 --> getAllStr --> s:", s);

      res.push(s);
    }
  }

  return res;
};

console.log(getAllStr("ABCD"));
