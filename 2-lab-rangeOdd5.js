'use strict'
function rangeOdd(start, end) {
    const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !==0) {
        result.push(i)
    }
  }

  return result;
};
console.log(rangeOdd(15, 30));
module.exports = { rangeOdd };
