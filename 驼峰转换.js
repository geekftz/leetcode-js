function converter(key) {
  return key.replace(/_([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
}

var key = "do_drawer";

console.log(converter(key));
