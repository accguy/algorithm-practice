const [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
let count = 0;
let divider;
for(let i = 1; i <= N; i++){
    if (N % i == 0) {
        count += 1;
        divider = i;
    }
    if(count == K){
        break;
    }
}
if(count < K){
    divider = 0;
}
console.log(divider);