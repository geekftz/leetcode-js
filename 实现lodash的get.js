function get(source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");

  let result = source;

  for (let p of paths) {
    result = result[p];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}

const obj = { a: [1, 2, 3, { b: 1 }] };
const value = get(obj, "a[3].b", 3);
console.log(value, "value");
