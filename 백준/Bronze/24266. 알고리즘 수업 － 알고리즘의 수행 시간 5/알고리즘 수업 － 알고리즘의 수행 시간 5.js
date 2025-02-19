const N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log((N**3n).toString());
console.log(3);