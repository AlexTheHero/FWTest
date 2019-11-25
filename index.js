function newPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
      return resolve(randomBoolean);
    }, 1000);
  });
};

function makePromiseArray() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(newPromise());
  }

  return arr;
}

const arrOfPromises = makePromiseArray();

Promise.all(arrOfPromises).then(function (values) {
  console.log(values);
  const trueCount = ((values.filter(val => val === false)).length);
  const falseCount = ((values.filter(val => val === true)).length);
  console.log('FALSE VALUES: ', trueCount);
  console.log('TRUE VALUES: ', falseCount);
  results.response = values;
  results._true = trueCount;
  results._false = falseCount;
  console.log(results);
  localStorage.setItem('any', JSON.stringify(results));
});



var results = {
  response: '', // Array of results from promises
  _true: '', // Count of true values
  _false: '' // Count of false values
};
