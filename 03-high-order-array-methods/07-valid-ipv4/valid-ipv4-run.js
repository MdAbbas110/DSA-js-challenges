const isValidIPv4 = require('./valid-ipv4.js');

const result1 = isValidIPv4('122.164.23.21');
const result2 = isValidIPv4('122.164.23.21.33');
const result3 = isValidIPv4('422.164.23.1');

console.log(result1, result2, result3);
