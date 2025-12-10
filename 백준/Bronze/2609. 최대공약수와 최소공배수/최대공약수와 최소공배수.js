const input = require('fs').readFileSync(0, 'utf-8').trim().split(" ").map(Number);

const gcd = (a, b) => {
    while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(input[0],input[1]));
console.log(input[0]*input[1]/gcd(input[0],input[1]));