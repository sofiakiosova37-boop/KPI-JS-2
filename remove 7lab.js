const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
};

const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 2);

console.log(array); 

const array1 = ['Kiev', 'Berlin', 'Paris', 'Milan'];
removeElement(array1, 'Berlin');
removeElement(array1, 'London'); 
console.log(array1);