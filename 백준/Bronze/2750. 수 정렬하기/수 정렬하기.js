const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
input.shift();
input.sort((a,b) => a-b);
for(let x of input) {
    console.log(x);
}
