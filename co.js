function co(gen) {
  var it = gen();
  var ret = it.next();
  ret.value.then(function (res) {
    it.next(res);
  });
}
function sayhello() {
  // return Promise.resolve('hello').then(function (hello) {
  //   console.log(hello);
  // });

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
}
co(function* helloworld() {
  const res = yield sayhello();
  console.log('%c%s', 'color: #007300', res);
  console.log('world');
});
