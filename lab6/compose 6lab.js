const compose = (...fns) => {
  const error = [];

  const composed = (x) => {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        if (typeof fns[i] !== "function") {
          throw new Error("You should use only function!");
        }
        x = fns[i](x);
      }
      return x;
    } catch (err) {
      error.forEach((e) => e(err));
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event === "error") 
      error.push(handler);
  };

  return composed;
};

const inc = x => x + 1;        
const twice = x => x * 2;      
const cube = x => x**3 ;

const f1 = compose(inc, twice, cube); 
console.log(f1(5));


const f2 = compose(inc, cube, twice);

console.log(f2(5));

