const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const map = new Map();
for(let i = 1; i < N + 1; i++) {
    map.set(input[i].split(" ")[0].trim(), input[i].split(" ")[1].trim());
}
const array = [];
for(let i = N + 1; i < N + M + 1; i++) {
    array.push(input[i].trim());
}

array.forEach(x => {console.log(map.get(x))});



