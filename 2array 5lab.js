'use strict';

'use strict';

function array() {
  const data = [];

  const get = function(index) {
    return data[index];
  };

  get.push = function(value) {
    data.push(value);
  };

  get.pop = function() {
    return data.pop();
  };

  return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 



