const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const cardList = new Set(input[1].split(" ")); 
const checkList = input[3].split(" ").map(x => cardList.has(x) ? 1 : 0);
console.log(...checkList);
