const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);

const sorted = [...new Set(arr)].sort((a,b) => a-b);
const map = new Map(sorted.map((x,i) => [x, i]));
const answer = arr.map(x => map.get(x));
console.log(answer.join(" "));