// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1 - 9 在每一行只能出现一次。
// 数字 1 - 9 在每一列只能出现一次。
// 数字 1 - 9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）

// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 空白格用 '.' 表示。

// 示例 1：

// 输入：board =
//   [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// 输出：true
// 示例 2：

// 输入：board =
//   [["8", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// 输出：false
// 解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

// 提示：

// board.length == 9
// board[i].length == 9
// board[i][j] 是一位数字（1 - 9）或者 '.'

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // console.log('🚀 --> isValidSudoku --> board:', board);
  const len = board.length;
  let res = true;

  // Array(size).fill({ }) 这样填充创建的数组，里面每一项{ }是完全相同的 !!! 创建二维数组避免使用fill
  // const mapX = new Array(9).fill(new Array())
  // console.log('🚀 --> isValidSudoku --> mapX:', mapX);

  // for循环创建的二维数组
  const mapX = [];
  const mapY = [];
  const mapZ = [];
  for (let i = 0; i < 9; i++) {
    mapX[i] = [];
    mapY[i] = [];
    mapZ[i] = [];
  }

  // map方法
  // const mapX = Array(9).fill().map(() => [])

  //
  // const mapX = Array.from(Array(9), () => Array())

  // 九宫格分类
  // 从左到右，从上到下，0-2，3-5，6-8
  function divideNineSquareGrid(a, b) {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const arr3 = [6, 7, 8];

    if (arr1.includes(a) && arr1.includes(b)) {
      return 0;
    }
    if (arr2.includes(a) && arr1.includes(b)) {
      return 1;
    }
    if (arr3.includes(a) && arr1.includes(b)) {
      return 2;
    }
    if (arr1.includes(a) && arr2.includes(b)) {
      return 3;
    }
    if (arr2.includes(a) && arr2.includes(b)) {
      return 4;
    }
    if (arr3.includes(a) && arr2.includes(b)) {
      return 5;
    }
    if (arr1.includes(a) && arr3.includes(b)) {
      return 6;
    }
    if (arr2.includes(a) && arr3.includes(b)) {
      return 7;
    }
    if (arr3.includes(a) && arr3.includes(b)) {
      return 8;
    }
  }

  outLoop: for (let i = 0; i < len; i++) {
    // console.log(i);
    innerLoop: for (let j = 0; j < len; j++) {
      const b = board[i][j];
      // 判断x轴
      if (b !== ".") {
        // console.log('🚀 --> isValidSudoku --> b:', b);
        if (mapX[i].includes(b)) {
          res = false;
          break outLoop;
        } else {
          mapX[i].push(b);
        }

        // 判断y轴
        if (mapY[j].includes(b)) {
          res = false;
          break outLoop;
        } else {
          mapY[j].push(b);
        }

        // 判断九宫格
        const z = divideNineSquareGrid(i, j);
        if (mapZ[z].includes(b)) {
          res = false;
          break outLoop;
        } else {
          mapZ[z].push(b);
        }
      }
    }

  }

  return res;
};

const input = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// const input =
//   [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]



const result = isValidSudoku(input);
console.log("🚀 --> result:", result);
