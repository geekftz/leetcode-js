const getData = () => new Promise((resolve) => setTimeout(() => resolve('111'), 200));
const getData2 = () => new Promise((resolve) => setTimeout(() => resolve('222'), 200));

// ##### test 1

// async function test() {
//   const data = await getData();
//   console.log('data: ', data);
//   const data2 = await getData();
//   console.log('data2: ', data2);
//   return 'success';
// }

// test().then((res) => console.log(res));

// ##### test 2

function* testG() {
  const data = yield getData();
  console.log('data: ', data);
  const data2 = yield getData2();
  console.log('data2: ', data2);
  return 'success';
}

// function asyncToGenerator(generator) {

// }

// var test = asyncToGenerator(testG)

var gen = testG();

var dataPromise = gen.next();
console.log('%c dataPromise ⧭', 'color: #cc0036', dataPromise);

dataPromise.value.then((value) => {
  console.log('%c value ⧭', 'color: #607339', value);

  var data2Promise = gen.next(value);
  console.log('%c data2Promise ⧭', 'color: #40fff2', data2Promise);

  data2Promise.value.then((value2) => {
    console.log('%c value2 ⧭', 'color: #f27999', value2);

    gen.next(value2);
  });
});

// ##### test 2
