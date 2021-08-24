function quickSort(arr) {
  // 注意 这里可能在 某一次数组排序中 left或者right被分为空数组[]
  if (arr.length <= 0) {
    return arr;
  }

  var len = arr.length;
  var midIndex = Math.floor(len / 2);
  var pivot = arr[midIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < len; i++) {
    const ele = arr[i];

    if (ele < pivot) {
      left.push(ele);
    }

    if (ele > pivot) {
      right.push(ele);
    }
  }
  console.log('%c⧭', 'color: #aa00ff', left);
  console.log('%c⧭', 'color: #e50000', right);

  // return quickSort(left).concat(pivot, quickSort(right));
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

var params = [3, 1, 2, 4];

var res = quickSort(params);
console.log('%c⧭', 'color: #ff0000', res);
