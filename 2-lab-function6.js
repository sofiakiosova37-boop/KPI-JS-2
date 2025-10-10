'use strict'
// 1
function avarage(a, b) {
    return (a+b)/2;
};
function square(x) {
    return x*x;
};
function cube(x) {
    return x*x*x;
};

function calculate() {
    const result = [];
    for (let i = 0; i < 10; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = avarage(sq, cb);
    result.push(avg);
  }

  return result;
}

console.log(calculate());

//2
const avarage1 = (a, b) => (a + b) / 2
const square1 = (x) => x*x
const cube1 = (x) => x*x*x

const calculate1 = () => {
    const result1 = []
    for (let i = 0; i < 10; i++) {
    const sq1 = square1(i);
    const cb1 = cube1(i);
    const avg1 = avarage1(sq1, cb1);
    result1.push(avg1);
  }

  return result1;
}

console.log(calculate1());