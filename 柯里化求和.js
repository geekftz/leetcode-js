/*
 * @Author: hackftz
 * @Date: 2021-03-21 01:34:29
 * @LastEditTime: 2021-03-21 01:47:08
 * @LastEditors: hackftz
 * @FilePath: /let-code/柯里化求和.js
 */

// function add(...args) {
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

function add(...args) {
  let _args = args;

  function _add(...moreArgs) {
    _args = [...args, ...moreArgs];
    return _add;
  }

  _add.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };

  return _add;
}

var res = add(1, 2, 3);
console.log("%c%s", "color: #e57373", res);

var res1 = add(3, 4, 3)(1);
console.log("%c%s", "color: #bfffc8", res1);
