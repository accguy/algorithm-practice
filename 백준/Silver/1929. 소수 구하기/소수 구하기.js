const [M, N] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
function isPrime(x) {
    if(x === 0) return false;
    if(x === 1) return false;
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if(x % i === 0) return false;
    }
    return true;
}
for(let i = M; i <= N; i++) {
    if(isPrime(i)) console.log(i);
}