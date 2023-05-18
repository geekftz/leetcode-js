function treeToList(tree) {
  let arr = [];
  const res = [];

  arr = arr.concat(tree);

  while (arr.length > 0) {
    const item = arr.shift();

    if (item.children.length > 0) {
      arr = arr.concat(item.children);
      delete item.children;
    }

    res.push(item);
  }

  return res;
}

var tree = [
  {
    id: 1,
    pid: "-1",
    children: [
      { id: 11, pid: "1", children: [] },
      { id: 12, pid: "1", children: [] },
    ],
  },
];

const res = treeToList(tree);
console.log("🚀 --> res:", res);
//[{"id":1,"pid":"-1"},{"id":11,"pid":"1"},{"id":12,"pid":"1"}]
