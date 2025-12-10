const input = require('fs').readFileSync(0,'utf-8').trim().split("\n");
for(let i = 0; i < input.length - 1; i++) {
    if(input[i].split("").reverse().join("") === input[i]) console.log("yes");
    else console.log("no");
}