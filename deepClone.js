function deepClone(origin, target) {
  var target = target || {};

  for (const key in origin) {
    if (Object.hasOwnProperty.call(origin, key)) {
      const ele = origin[key];

      if (Array.isArray(ele)) {
        target[key] = [];
        deepClone(ele, target[key]);
      } else if (typeof ele === 'object' && ele !== null) {
        target[key] = {};
        deepClone(ele, target[key]);
      } else {
        target[key] = ele;
      }
    }
  }
  return target;
}

var params = {
  _num: 1,
  _arr: [
    2,
    3,
    {
      name: 'foo',
    },
    [4, 5],
  ],
};

var res = deepClone(params);

console.log('%c⧭', 'color: #917399', res);
