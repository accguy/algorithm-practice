const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const prefix = Array(arr.length+1).fill(0);
for(let i = 1; i <= arr.length; i++){
    prefix[i] = prefix[i-1] + arr[i-1];
}
let maxSum = -Infinity;
for(let i = 0; i <= arr.length-K; i++){
    const partialSum = prefix[i+K] - prefix[i];
    if(partialSum > maxSum) maxSum = partialSum;
}
console.log(maxSum);
