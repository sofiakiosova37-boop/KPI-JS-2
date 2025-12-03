const removeElements = (array, ...items) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
};

const arr = [1, 2, 3, 2, 4, 5];

removeElements(arr, 2, 4);

console.log(arr); 
