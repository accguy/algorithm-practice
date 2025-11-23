const input = require('fs').readFileSync(0,'utf-8').trim().split("\n");
const result = input[1].split("").map((x,i) => (x.charCodeAt()-96)*(31**i)).reduce((a,c)=>a+c,0);
console.log(result);