function sum(...args) {
  let total = 0;
  let i = 0;
  if (args.length === 0) return 0; 
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
}

console.log(sum(15, 1, 2))