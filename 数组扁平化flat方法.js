Array.prototype.flat = function (depth = 1) {
  var arr = [];
  // 遍历层级 累加
  var depNum = 0;

  // this变了 会变成子数组
  this.forEach((item, index) => {
    if (Array.isArray(item)) {
      if (depNum < depth) {
        depNum++;
        // 新的栈
        arr = arr.concat(item.flat());
      } else {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  });

  return arr;
};

var params = [1, [2, 3], [4, [5, 6]]];

var res = params.flat();

console.log('%c⧭', 'color: #d90000', res);
