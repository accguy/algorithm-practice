const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);
arr.sort((a, b) => a - b);
let count = 0;
let l = 0;
let r = arr.length - 1;
while(l < r) {
    const sum = arr[l] + arr[r];
    if(sum == x) {
        count++;
        l++;
        r--;
    }else if(sum > x) {
        r--;
    }else{
        l++;
    }
}
console.log(count);