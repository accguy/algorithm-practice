const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const M = Number(input[2]);
const array = new Set(input[1].split(" ").map(Number));
const checkList = input[3].split(" ").map(Number);

for(let x of checkList){
    if(array.has(x) === true){
        console.log(1);
    }else {
        console.log(0);
    }
}