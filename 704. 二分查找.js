// 二分法查找有序数组中数字的下标

// 1. 递归
// 起点和终点下标 随着二分后 会变化
function binarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex > endIndex) {
    return -1;
  }

  // startIndex hight 中间下标
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  const midVal = arr[midIndex];

  if (target === midVal) {
    return midIndex;
  } else if (target < midVal) {
    return binarySearch(arr, target, startIndex, midIndex - 1);
  } else if (target > midVal) {
    return binarySearch(arr, target, midIndex + 1, endIndex);
  }

  // 没有找到的情况 返回-1
  return -1;
}

const params = [1, 3, 7, 9, 11, 19];

const res = binarySearch(params, 21);
console.log('%c binarySearch => res: %s', 'color: #00ff88', res);

// 2. 循环
function binarySearch1(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex = undefined;

  // low大于high 或者 high小于low 循环结束
  while (startIndex <= endIndex) {
    // debugger;
    midIndex = Math.floor((startIndex + endIndex) / 2);
    const midVal = arr[midIndex];

    if (target === midVal) {
      return midIndex;
    } else if (target < midVal) {
      endIndex = midIndex - 1;
    } else if (target > midVal) {
      startIndex = midIndex + 1;
    }
  }

  return -1;
}

const params1 = [1, 3, 7, 9, 11, 19];

const res1 = binarySearch1(params1, 222);
console.log('%c binarySearch1 => res1: %s', 'color: #33cc99', res1);
