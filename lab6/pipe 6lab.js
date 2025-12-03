"use strict"

const pipe = (...fns) => {
  
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }

  return (x) => {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));


