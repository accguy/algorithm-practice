const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(x => x.split(" ").map(Number));
let x = null;
let y = null;
arr.sort((a,b)=>a[0]-b[0]);
x = arr[0][0] == arr[1][0] ? arr[2][0] : arr[0][0];
arr.sort((a,b)=>a[1]-b[1]);
y = arr[0][1] == arr[1][1] ? arr[2][1] : arr[0][1];
console.log(`${x} ${y}`);