const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);
const numsToGet = input[3].split(" ").map(Number);

const map = new Map();
nums.forEach(x => {
    if(map.has(x)) {
        map.set(x, map.get(x) + 1);
    }else{
        map.set(x, 1);
    }
})


const a = numsToGet.map(x => {
    if(map.has(x)){
        return map.get(x);
    }else{
        return 0;
    }
});

console.log(...a);