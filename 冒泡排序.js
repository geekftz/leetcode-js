// 冒泡排序

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr, 123);
}

var arr = [7, 3, 4, 5, 1, 2, 3];

var res = bubble(arr);
console.log("%c⧭", "color: #735656", res);
