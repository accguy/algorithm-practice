const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const max = Math.max(a,b,c);
const sum = a+b+c;
const rest = sum - max;
console.log(max >= rest ? 2 * rest - 1 : rest + max)