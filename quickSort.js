// 快速排序法

var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];
  var right = [];

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (ele < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot, ...quickSort(right)]);
};

// var arr = [85, 24, 63, 45, 17, 31, 96, 50];
var arr = [1, 24, 11, 45, 22, 66, 33, 50];

var res = quickSort(arr);
console.log("%c⧭", "color: #1d3f73", res);
