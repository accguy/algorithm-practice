const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
for (let x of input) {
    if (x == -1) break;
    
    if (x === 1) { 
        console.log("1 is NOT perfect.");
        continue;
    }
    
    const divisors = [1];
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x%i == 0) {
            divisors.push(i);
            if(i !== x/i) divisors.push(x/i);
        }
    }
 
    const sum = divisors.reduce((a,c) => a + c, 0);
    
    if (sum == x) {
        divisors.sort((a,b) => a - b);
        console.log(`${x} = ${divisors.join(" + ")}`);
    } else {
        console.log(`${x} is NOT perfect.`);
    }
}