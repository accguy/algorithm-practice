const input = require('fs').readFileSync(0,'utf-8').trim().split("\n").map(Number);
const N = input[0];
function isPrime(x) {
    if(x===1 || x===0) return false;
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}
for(let i = 1; i <= N; i++) {
    let X = input[i];
    while(!isPrime(X)) {
        X++;
    }
    console.log(X);
}