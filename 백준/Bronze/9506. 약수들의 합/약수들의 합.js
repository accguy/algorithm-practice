const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
for (let x of input) {
    if (x == -1) break;
    const divisors = new Set([1]);
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x%i == 0) {
            divisors.add(i);
            divisors.add(x/i);
        }
    }
 
    let answer = `${x} `;
    const sum = [...divisors].reduce((a,c) => a + c, 0);
    
    if (sum == x) {
        const array = [...divisors].sort((a,b) => a - b);
        answer += "= " + array.join(" + ");
        console.log(answer);
    } else {
        answer += `is NOT perfect.`;
        console.log(answer);
    }
}