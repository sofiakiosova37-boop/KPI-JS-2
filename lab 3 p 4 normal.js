'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

const result = Object.keys(iface)
    .filter(key => typeof iface[key] === 'function')
    .map(key => [key, iface[key].length])
    
console.log(result)
console.log(JSON.stringify(result));
console.table((result));


// second one
const iface1 = {
  m1: x1 => [x1],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const methods = (iface1) => {
  const names = [];
  for (const name in iface1) {
    const fn = iface1[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};
console.log(iface1)
console.log(JSON.stringify(methods(iface1)));
console.table(methods(iface1));