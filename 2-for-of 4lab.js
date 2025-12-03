'use strict'

function sum(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}

console.log(sum(9, 2, 12)); 