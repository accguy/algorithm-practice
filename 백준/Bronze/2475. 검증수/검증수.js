const input = require('fs').readFileSync(0, 'utf-8').trim().split(" ").map(Number).reduce((a,c) => a + (c**2), 0)%10;
console.log(input);