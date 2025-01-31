const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];
for(let i = 0; i < 9; i++){
    const row = input[i].split(" ").map(Number);
    arr.push(...row);
}
const maxNum = Math.max(...arr);
const index = arr.indexOf(maxNum); // 0 ~ 80
const locationX = Math.floor(index / 9) + 1; 
const locationY = (index % 9) + 1;

console.log(maxNum);
console.log(locationX, locationY);