const unique = (array) => {
  const result = []; // новий масив для унікальних значень

  for (const item of array) {
    if (!result.includes(item)) { // перевіряємо, чи ще немає такого елемента
      result.push(item);          // додаємо, якщо його немає
    }
  }

  return result;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result); 
