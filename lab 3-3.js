'use strict'
const ipToInt = (ip='127.0.0.1') => {
    return ip.split('.').reduce((res, item) => (res << 8) + parseInt(item), 0);
};
console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('192.168.0.1'));
module.exports = {ipToInt};