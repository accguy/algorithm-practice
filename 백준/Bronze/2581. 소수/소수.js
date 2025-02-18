const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const isPrime = x => {
    if(x === 1) return false;
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if(x%i === 0) return false;
    }
    return true;
}

const arr = [];
for(let i = N; i <= M; i++){
    if(isPrime(i)) arr.push(i);
}

if(arr.length === 0){
    console.log(-1);
} else {
    console.log(arr.reduce((a,c)=>a+c,0));
    console.log(arr[0]);
}
