const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const N = Number(input.shift());

input.sort((a,b) => {
    return a.length===b.length ? a.localeCompare(b) : a.length - b.length;
})
console.log([...new Set(input)].join("\n"));