// console.log(arguments);
// console.log(require('module').wrapper);

// modules.exports 
const C = require('./test-module-1');

const calc1 = new C();

console.log(calc1.add(2, 5));

// exports 
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 5));
const { add, multiply, divide } = require('./test-module-2');
console.log(add(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();