const input = require('fs').readFileSync(0,'utf-8').trim().split("\n");
const N = +input[0];
const tshirts = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);
const countT = tshirts.reduce((a,c) => a + Math.ceil(c / T), 0);
console.log(countT);
console.log(Math.floor(N/P), N%P);