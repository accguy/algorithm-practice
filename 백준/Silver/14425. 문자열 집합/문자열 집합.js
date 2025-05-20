const input = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const set = new Set();
let count = 0;
for(let i = 1; i <= N+M; i++){
    if(i <= N) {
        set.add(input[i]);
    } else {
        if(set.has(input[i])) count++;
    }
    
}
console.log(count);