const N = require('fs').readFileSync(0,'utf-8').trim().split("\n").map(Number).reduce((a,c)=>a*c,1);
for(let i = 0; i<=9; i++) {
    const arr = String(N).split("").filter(x => x==i);
    console.log(arr.length);
}