// 快速排序法

var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // 找到中间的数
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];

  // 左右数组
  var left = [];
  var right = [];

  // 遍历每个元素 放进 左右数组
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (ele < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 递归重组数组
  return quickSort(left).concat([pivot, ...quickSort(right)]);
};

// var arr = [85, 24, 63, 45, 17, 31, 96, 50];
var arr = [1, 24, 11, 45, 22, 66, 33, 50];

var res = quickSort(arr);
console.log('%c⧭', 'color: #1d3f73', res);
