const input = require('fs').readFileSync(0, "utf-8").trim().split("\n");
const A = new Set([...input[1].split(" ")]);
const B = new Set([...input[2].split(" ")]);
const answer = new Set();
for(let a of A){
    if(!B.has(a)) {
        answer.add(a);
    }
}
for(let b of B){
    if(!A.has(b)) {
        answer.add(b);
    }
}
console.log(answer.size);
