const [x,y,w,h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const arr = [x,y,w-x,h-y].sort((a,b) => a-b);
console.log(arr[0]);