const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").slice(1).map(x => x.split(" "));
input.sort((a,b) => Number(a[0]) - Number(b[0]));
console.log(input.map(x => x.join(" ")).join("\n"));