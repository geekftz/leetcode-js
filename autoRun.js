var fetch = require('node-fetch');
const co = require('co');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((post) => post.title)
//   .then((x) => console.log('Title: ', x));

// co(function* () {
//   const response = yield fetch(url);
//   const post = yield response.json();
//   const title = post.title;
//   console.log('Title: ', title);
// });

// function run(generator) {
//   const iterator = generator();
//   const iteration = iterator.next();

//   const promise = iteration.value;
//   promise.then((x) => {
//     const anotherIterator = iterator.next(x);
//     const anotherPromise = anotherIterator.value;
//     console.log('%c⧭', 'color: #cc0088', anotherPromise);
//     anotherPromise.then((post) => iterator.next(post));
//   });
// }

function run(generator) {
  const iterator = generator();
  const iteration = iterator.next();

  function autoRun(iteration) {
    if (iteration.done) {
      return iteration.value;
    }

    const anotherPromise = iteration.value;

    anotherPromise.then((x) => {
      autoRun(iterator.next(x));
    });
  }

  autoRun(iteration);
}

run(function* () {
  const response = yield fetch(url);
  const post = yield response.json();
  const title = post.title;

  console.log('title: ', title);
});
