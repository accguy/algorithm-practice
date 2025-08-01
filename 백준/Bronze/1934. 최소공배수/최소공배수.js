const input = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
const N = Number(input[0]);
const gcd = (x, y) => {
    let A = Math.max(x,y);
    let B = Math.min(x,y);
    let temp = B;
    while(temp!==0){
        temp = A % B;
        A = B;
        B = temp;
    }
    return A;
}
for(let i = 1; i <= N; i++){
    const [x, y] = input[i].split(" ").map(Number);
    console.log(x*y/gcd(x,y));
}