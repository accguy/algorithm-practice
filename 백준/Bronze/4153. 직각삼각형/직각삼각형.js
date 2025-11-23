const input = require('fs').readFileSync(0,'utf-8').trim().split("\n");
for(let i = 0; i < input.length - 1; i++){
    const [a, b, c] = input[i].split(" ").map(Number).sort((a,b) => a-b);
    if(a**2 + b**2 === c**2) console.log("right");
    else console.log("wrong");
}