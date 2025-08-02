const input = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
const [a1, a2] = input[0].split(" ").map(Number);
const [b1, b2] = input[1].split(" ").map(Number);
const X = a1 * b2 + b1 * a2;
const Y = a2 * b2;
const gcd = (x, y) => {
    while(y !== 0) [x, y] = [y, x%y];
    return x;
}
console.log(`${X/gcd(X,Y)} ${Y/gcd(X,Y)}`);
