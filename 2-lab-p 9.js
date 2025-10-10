const userinfo = [
        {name: 'Zoryna Astra', phone: '+36477484383'},
        {name: 'Darlinghton', phone: '+38986665835'},
        {name: 'Doanna', phone: '+3096328753'},
    ];
    function findPhoneByName(name) {
  for (const obj of userinfo) {
    if (obj.name === name) {
        return `Name: ${obj.name}, Phone: ${obj.phone}`;
    }
  }
  return 'Not Found';
};

console.log(findPhoneByName('Zoryna Astra'));    
console.log(findPhoneByName('Nicola')); 
