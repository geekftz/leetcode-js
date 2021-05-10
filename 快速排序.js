// 快速排序

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivotIndex = arr.length >> 1;

//   // 取出中间值 数组长度-1
//   let pivot = arr.splice(pivotIndex, 1)[0];

//   // 子数组 左
//   let left = [];
//   // 子数组 右
//   let right = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item < pivot) {
//       left.push(item);
//     } else {
//       right.push(item);
//     }
//   }

//   return quickSort(left).concat(pivot, quickSort(right));
// }

// 元素交换
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 数组分区，左小右大
function partition(arr, left, right) {
  let storeIndex = left;
  let pivot = arr[right]; // 直接选最右边的元素为基准元素
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, storeIndex, i);
      storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
    }
  }
  swap(arr, storeIndex, right); // 将基准元素放置到最后的正确位置上
  return storeIndex;
}

function sort(arr, left, right) {
  if (left > right) {
    return;
  }
  let storeIndex = partition(arr, left, right);
  sort(arr, left, storeIndex - 1);
  sort(arr, storeIndex + 1, right);
}

function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
  return arr;
}

var arr = [3, 2, 4, 1];

// var arr = [5, 7, 4, 3, 1, 2];

var res = quickSort(arr);
console.log("%c⧭", "color: #40fff2", res);
