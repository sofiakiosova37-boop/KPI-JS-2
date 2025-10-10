'use strict'
// 1 part name
const MyName = "Sofi"
console.log(`Your name is ${MyName}`)
module.exports = {MyName };

// 2 part birthyear
const BirthYear = "2008"
console.log(`You were born in ${BirthYear}`)
module.exports = { BirthYear };

// 3 part hello
let name1 ='Zoryna';

const hello = (name1) => {
  console.log(`Hello, ${name1}!`);
};
console.log(`Hello, ${name1}!`);
module.exports = { hello };

// 4 complex 1
const hello1 = (MyName, BirthYear) => {
  console.log(`Hello, ${MyName}! You were born in ${BirthYear}`);
};
console.log(`Hello, ${MyName}! You were born in ${BirthYear}`);
module.exports = { hello1 };

// 4 complex 2
const hello2 = (name1) => {
  console.log(`Hello, ${name1}!`);
};

const greet1 = (hello2, birthyear1) => {
    console.log(`Hello ${hello2}, You were born in ${birthyear1}`)
};
greet1('Jo', 2000)
module.exports = { hello2, greet1 };