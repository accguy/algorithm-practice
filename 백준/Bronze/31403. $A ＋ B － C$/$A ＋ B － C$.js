const [A,B,C] = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
console.log(+A + +B - +C);
console.log(A+B-C);