const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sortedArr = arr.sort((a,b) => b - a);
console.log(sortedArr[K-1]);
