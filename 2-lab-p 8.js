// 1
const createUser = (name, city) => {
    return {
        name: name,
        city: city
    };
};
const createuser = createUser('Adajoleo', 'Dublin');
console.log(createuser);

// 2
const createUser1 = (name, city) => ({ name, city })

const userinfo = createUser1("Astra", "Florence")

console.log(userinfo)