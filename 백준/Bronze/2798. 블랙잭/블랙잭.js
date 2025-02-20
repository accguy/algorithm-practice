const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let max = 0;
for(let i = 0; i <= N-3; i++){
    for(let j = i+1; j <= N-2; j++){
        for(let k = j+1; k <= N-1; k++){
            const sum = cards[i]+cards[j]+cards[k];
            if(sum > max && sum <= M){
                max = sum;
            }
        }
    }
}

console.log(max);