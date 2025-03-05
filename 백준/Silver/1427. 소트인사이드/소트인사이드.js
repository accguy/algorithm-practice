const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("").map(Number).sort((a,b)=>b-a);
console.log(input.join(""));
