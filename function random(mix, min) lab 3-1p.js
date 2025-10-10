function random(min, max) {
     if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(random(2008));      
console.log(random(20, 50)); 
module.exports = { random };
