let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for(let i = 2; i <= Math.sqrt(N); i++) {
    while(N % i === 0) {
        console.log(i)
        N /= i;
    }
}
if(N > 1){
    console.log(N);
}