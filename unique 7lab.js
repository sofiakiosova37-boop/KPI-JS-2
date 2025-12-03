const unique = (array) => {
  const result = []; 

  for (const item of array) {
    if (!result.includes(item)) { 
      result.push(item);         
    }
  }

  return result;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result); 

