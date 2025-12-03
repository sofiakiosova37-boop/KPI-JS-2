const compose = (...fns) => {
  const error = [];

  const composed = x => {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        x = fns[i](x);
      }
      return x;
    } catch (e) {
      error.forEach(h => h(e));
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
const fail = x => { throw new Error("Помилка!"); };

const f1 = compose(inc, twice, inc); 
console.log(f1(5));


const f2 = compose(inc, fail, twice);

f2.on("error", e => console.log( e.message));


console.log(f2(5));
