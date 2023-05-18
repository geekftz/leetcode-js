function listToTree(arr) {
  const result = [];
  const map = new Map();

  // 映射关系
  arr.forEach((item) => {
    map.set(item.id, item);
  });

  for (let item of arr) {
    if (map.has(item.pid)) {
      if (!map.get(item.pid).children) {
        map.get(item.pid).children = [];
      }

      map.get(item.pid).children.push(item);
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr = [
  { id: 1, pid: null, name: "1" },
  { id: 2, pid: "-1", name: "1" },
  { id: 11, pid: 1, name: "11" },
  { id: 12, pid: 1, name: "12" },
];

const res = listToTree(arr);
console.log("🚀 --> res:", JSON.stringify(res));
// [{"id":1,"pid":null,"name":"1","children":[{"id":11,"pid":1,"name":"11"},{"id":12,"pid":1,"name":"12"}]},{"id":2,"pid":"-1","name":"1"}]
