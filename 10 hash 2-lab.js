'use strict';

const phonebook = {
  Astrid: '+09094049',
  Avery: '+3808827397',
  Hiccup: '98765434567'
};

const findPhoneByName = (name) => {
  for (const key in phonebook) {
    if (key === name) {
  return phonebook[key];
  }
  return 'Not Found';
};
}
console.log(findPhoneByName ("Astrid"))
console.log(findPhoneByName ("Rapunzel"))
module.exports = { phonebook, findPhoneByName };