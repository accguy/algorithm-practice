const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const array = input.map(x => x.trim().split(""));
const maxLength = Math.max(...array.map(x => x.length));

array.forEach(x => {
    x.length = maxLength;
})

let answer = '';
for(let i = 0; i < maxLength; i++){
    for(let x of array){
        answer += (x[i] === undefined ? "" : x[i]);
    }
}
console.log(answer);