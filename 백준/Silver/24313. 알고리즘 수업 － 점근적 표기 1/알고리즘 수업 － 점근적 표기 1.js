const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [a,b] = input[0].split(" ").map(Number);
const c = +input[1];
const n = +input[2];
console.log(a*n + b <= c*n && a <= c ? 1 : 0);