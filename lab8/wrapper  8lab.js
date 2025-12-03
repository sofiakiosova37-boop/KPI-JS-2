const contract = (fn, ...types) => {
  return (...args) => {
    const resultType = types[types.length - 1];
    const argTypes = types.slice(0, -1);

    if (args.length !== argTypes.length) {
      throw new Error(
        `Expected ${argTypes.length} arguments, but got ${args.length}`
      );
    }

    for (let i = 0; i < argTypes.length; i++) {
      if (typeof args[i] !== argTypes[i].name.toLowerCase()) {
        throw new TypeError(
          `Argument ${i} should be ${argTypes[i].name}, but got ${typeof args[i]}`
        );
      }
    }

    const result = fn(...args);

    if (typeof result !== resultType.name.toLowerCase()) {
      throw new TypeError(
        `Return value should be ${resultType.name}, but got ${typeof result}`
      );
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

