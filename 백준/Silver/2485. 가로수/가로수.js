const input = require('fs').readFileSync(0, 'utf-8').trim().split("\n").map(Number);
const N = input[0];
const diffArr = [];
for(let i = 1; i < N; i++) {
    diffArr.push(input[i+1] - input[i]);
}
const gcd = (x,y) => {
    while(y!==0) {
        [x,y] = [y,x%y];
    }
    return x;
}

const gap = diffArr.reduce((a,c) => gcd(a,c), diffArr[0]);
console.log(diffArr.reduce((a,c)=> a+(c/gap - 1), 0));
