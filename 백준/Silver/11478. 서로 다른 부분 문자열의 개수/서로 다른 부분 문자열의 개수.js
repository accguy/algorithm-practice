const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const set = new Set();
const length = input.length;

for(let n = 1; n <= length; n++){
    for(let i = 0; i < length - n + 1; i++){
        set.add(input.substring(i, i + n));
    }
}

console.log(set.size);