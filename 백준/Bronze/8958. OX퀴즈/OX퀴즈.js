const input = require('fs').readFileSync(0,'utf-8').trim().split("\n");
const N = +input[0];
for(let i = 1; i <= N; i++) {
    const arr = input[i]
    .split("X").filter(x => x)
    .map(x => x.length)
    .reduce((a,c) => a + (c*(c+1)/2), 0);
    console.log(arr);
}