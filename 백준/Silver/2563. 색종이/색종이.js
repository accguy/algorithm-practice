const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]);
const bg = Array(100).fill(0).map(x => Array(100).fill(0));
for (let i = 1; i <= N; i++){
    const [x, y] = input[i].split(" ").map(Number);
    
    for(let j = y; j < y + 10; j++){
        for(let k = x; k < x + 10; k++){
            if(j<=100 && k<= 100){
                bg[j][k] = 1;    
            }
        }
    }
}
console.log(bg.flat().reduce((a, c) => a + c, 0));