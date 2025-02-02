const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
const T = input[0];
const coin = [25, 10, 5, 1];

for (let i = 1; i <= T; i++) {
    const array = [];
    coin.forEach(c => {
        if(input[i] >= c){
            array.push(Math.floor(input[i] / c));
            input[i] = input[i] % c;
        }else{
            array.push(0);
        }
    })
    console.log(...array);
}
