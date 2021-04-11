// 快速排序

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = arr.length >> 1;

  // 取出中间值 数组长度-1
  let pivot = arr.splice(pivotIndex, 1)[0];

  // 子数组 左
  let left = [];
  // 子数组 右
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// var arr = [1, 3, 2, 4];

var arr = [5, 7, 4, 3, 1, 2];

var res = quickSort(arr);
console.log("%c⧭", "color: #40fff2", res);
