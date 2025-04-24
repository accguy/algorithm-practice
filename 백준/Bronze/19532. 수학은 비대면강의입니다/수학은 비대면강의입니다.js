const [a,b,c,d,e,f] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(Number);
for(let i = -999; i <= 999; i++) { 
    const A = a*i;
    const D = d*i;
    for(let j = -999; j <= 999; j++) {
        const B = b*j;
        const E = e*j;
        if(A+B===c && D+E===f) console.log(i, j);
    }
}
