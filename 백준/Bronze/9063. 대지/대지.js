const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
const x = [];
const y = [];
for(let i = 1; i <= N; i++) {
    x.push(input[i].split(" ").map(Number)[0]);
    y.push(input[i].split(" ").map(Number)[1]);
}
const w = Math.max(...x) - Math.min(...x);
const h = Math.max(...y) - Math.min(...y);
console.log(w*h);