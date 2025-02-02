const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const N = input[0];
const B = Number(input[1]);
// A:65 - Z:90 -> 10 ~ 35
const coefficients = N.split("").map(x => {
    if(isNaN(x)){
        return x.charCodeAt() - 55;
    }else{
        return Number(x);                        
    }
});
const reversed = coefficients.reverse();
const answer = reversed.reduce((a, c, i) => c * (B ** i) + a, 0);
console.log(answer);