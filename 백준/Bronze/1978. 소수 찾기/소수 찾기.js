const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);

const isPrime = x => {
    if(x === 1) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(x); i++){
        if(x%i === 0){
            return false;
        }
    }
    return true;
}

let count = 0;
arr.forEach((x) => {
    if(isPrime(x)) count++;
})
console.log(count);