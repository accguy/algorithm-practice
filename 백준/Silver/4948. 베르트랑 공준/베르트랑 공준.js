const input = require('fs').readFileSync(0, 'utf-8').split('\n').map(Number);

const isPrime = (x) => {
    if(x === 1) return false;
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if(!(x%i)) return false;
    }
    return true;
}

const getPrimeCount = (x) => {
    let count = 0;
    for(let i = x+1; i <= 2*x; i++){
        if(isPrime(i)) count++;
    }
    return count;
}
      
let i = 0;
while(input[i]!==0){
    console.log(getPrimeCount(input[i]));
    i++;
}