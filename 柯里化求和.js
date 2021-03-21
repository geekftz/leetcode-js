/*
 * @Author: hackftz
 * @Date: 2021-03-21 01:34:29
 * @LastEditTime: 2021-03-21 01:47:08
 * @LastEditors: hackftz
 * @FilePath: /let-code/柯里化求和.js
 */

// function sumWithES6(...args) {
//   var _args = args;

//   var _add = function (...moreArgs) {
//     _args.push(...moreArgs); // 这里使用的是ES6数组的解构
//     return _add;
//   };

//   _add.toString = _add.valueOf = function () {
//     let sum = _args.reduce(function (a, b) {
//       return a + b;
//     });
//     return sum;
//   };
//   return _add;
// }

// var res = sumWithES6(1, 2, 3);
// console.log('%c%s', 'color: #e57373', res);

// var res1 = sumWithES6(3, 4, 3)(1);
// console.log('%c%s', 'color: #bfffc8', res1);

var sum = function (...args) {
  let _args = args;

  function reducer(arr) {
    return arr.reduce((p, q) => p + q);
  }

  function add(...moreArgs) {
    _args = [..._args, ...moreArgs];

    return add;
  }

  add.toString = add.valueOf = function () {
    var all = reducer(_args);
    return all;
  };

  return add;
};

var res2 = sum(1, 2, 3)(4);
console.log('%c%s', 'color: #1d3f73', res2);
