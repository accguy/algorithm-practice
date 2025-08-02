const [A, B] = require('fs').readFileSync(0, 'utf-8').trim().split(" ").map(Number);
const gcd = (x, y) => {
    while(y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}
console.log(A*B/gcd(A,B));