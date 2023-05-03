function arrayToString() {
  var res = "";

  this.forEach((item, index) => {
    res += item + ",";
  });

  return res.slice(0, res.length - 1);
}

Array.prototype.arrayToString = arrayToString;

// 需要先flat
// var params = [1, [2, 3], [4, [5, 6]]];

var params = [1, 2, 3];

var res = params.arrayToString();
console.log("%c⧭", "color: #1d5673", res);
