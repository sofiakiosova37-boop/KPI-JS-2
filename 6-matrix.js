'use strict'

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const flatArray = arr.flat();

const m = Math.max(...flatArray);
console.log(m);

