const [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
console.log(Math.ceil(1 + (V-A)/(A-B) ) );

