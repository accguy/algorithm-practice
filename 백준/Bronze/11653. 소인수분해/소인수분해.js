let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for(let i = 2; i*i <= N; i++) { // Math.sqrt()는 처음에 한번만 계산됨
    while(N % i === 0) {
        console.log(i)
        N /= i;
    }
}
if(N > 1){
    console.log(N);
}