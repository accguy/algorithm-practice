const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number).slice(1).sort((a, b) => a - b);
console.log(input.join('\n'));

