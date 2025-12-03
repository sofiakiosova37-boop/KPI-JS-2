"use strict"

const pipe = (...fns) => {
  
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }

  return (x) => fns.reduce((acc, fn) => fn(acc), x);
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));
console.log(f(7));

console.log(pipe(inc, 7, cube)(2));



