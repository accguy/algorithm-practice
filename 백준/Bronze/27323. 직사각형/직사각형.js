const i = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
console.log(i[0]*i[1]);