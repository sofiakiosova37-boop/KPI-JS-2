'use strict';
// 1
const range =(start, end) => {
    let result = [];
     for (let i = start; i <= end; i++){
        result.push(i);
  }
  return result;
     }
console.log(range(15, 30));

// 2
const range1 =(start, end) => {
    let result = [];
     for (let i = start; i <= end; i++){
        result.push(i);
  }
  return result;
     }
let start = 30
let end = 50
console.log(range1(start, end));

// 3
function range2(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result[i - start] = i;
  }

  return result;
};
console.log(range2(-10, 10));
module.exports = { range2 };

// 4 
function range4(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
};
const resultArray = range4(30, 50);
console.log(resultArray);
module.exports = { range4 };

// 5
function range5(a1, b1) {
  const result = [];
  for (let i = a1; i <= b1; i++) {
    result.push(i);
  }

  return result;
};
const a1 = 100
const b1 = 110
const resultArray1 = range5(a1, b1);
console.log(resultArray1);
module.exports = { range5 };

