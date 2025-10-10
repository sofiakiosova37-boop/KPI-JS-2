function generateKey(length, possible) {
  const Length = possible.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * Length);
    result += possible[index];
  }

  return result;
}

const MyTry = 'abcd765efghijklm98765678nopqrstuvwkuy67878jbvgf44787xyz01234ghfdfgvggty56789';
const key = generateKey(25, MyTry);
console.log(key);