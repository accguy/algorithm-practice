const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);

console.log(input.reduce((a,c) => a + c, 0) / 5);

input.sort((a, b) => a - b);

console.log(input[2]);