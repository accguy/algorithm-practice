const N = Number(require('fs').readFileSync('/dev/stdin').toString());

let level = 1;
let threshold = 1;

while (threshold < N) { // N이 현재 threshold보다 크면 반복, N은 고정 되어있음
    threshold += 6 * level; 
    level++;
}

console.log(level);