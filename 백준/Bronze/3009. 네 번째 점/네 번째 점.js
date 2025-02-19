const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(x => x.split(" ").map(Number));

let x, y;
const xCount = {};
const yCount = {};

for(let [a, b] of arr) {
    xCount[a] = (xCount[a] || 0) + 1;
    yCount[b] = (yCount[b] || 0) + 1;
}

for(const key in xCount) {
    if(xCount[key] == 1) x = key;
}
for(const key in yCount) {
    if(yCount[key] == 1) y = key;
}

console.log(`${x} ${y}`);