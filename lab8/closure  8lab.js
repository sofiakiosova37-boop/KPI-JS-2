const store = (value) => {
  return () => value;
};

const read = store(5);

const value = read(); 
console.log(value); // 5

const read2 = store("Hello");
console.log(read2()); // "Hello"
