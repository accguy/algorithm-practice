const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const map = new Map();
for(let i = 1; i < N + 1; i++){
    map.set(input[i], null);
}

let count = 0;
const arr = [];
for(let i = N + 1; i < N + M + 1; i++){
    if(map.has(input[i])){
        count += 1;
        arr.push(input[i]);
    }
}

console.log(count);
arr.sort().forEach(x => {
    console.log(x);
});