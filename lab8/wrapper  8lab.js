const contract = (fn, ...types) => {
  return (...args) => {

    for (let i = 0; i < types.length - 1; i++) {
      if (typeof args[i] !== types[i].name.toLowerCase()) {
        throw new TypeError(
          `Argument type should be ${types[i].name}`
        );
      }
    }


    const result = fn(...args);

    const expectedType = types[types.length - 1];


    if (typeof result !== expectedType.name.toLowerCase()) {
      throw new TypeError(
        `Return value should be ${expectedType.name}`
      );
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); 
