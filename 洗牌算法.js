// 打乱数组顺序
// 最完美的解决办法 -- Fisher–Yates shuffle 洗牌算法

// function shuffle(arr) {
//   let i = arr.length;
//   while (i) {
//     let j = Math.floor(Math.random() * i);
//     console.log('%c%s', 'color: #ffcc00', j);
//     i--;
//     [arr[j], arr[i]] = [arr[i], arr[j]];
//   }
//   return arr;
// }

function shuffle(arr) {
  var length = arr.length,
    temp,
    random;
  while (0 != length) {
    random = Math.floor(Math.random() * length);
    length--;
    temp = arr[length];
    arr[length] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

var res = shuffle(arr);

console.log("%c⧭", "color: #00e600", res);
