'use strict';

function seq(f) {
  let funcs = [f];

  function chain(arg) {
    if (typeof arg === "function") {
      funcs.push(arg);
      return chain;
    }

    if (typeof arg === "number") {
      let result = arg;
      for (let i = funcs.length - 1; i >= 0; i--) {
        result = funcs[i](result);
      }
      return result;
    }
  }

  return chain;
}

console.log(
  seq(x => x + 7)
     (x => x * 2)
     (5)
); 

console.log(
  seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)
); 

console.log(
  seq(x => x * 2)
   (x => x + 7)(5)
); 