const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(x => x.split(" ").map(Number));
for(let [a,b,c] of input) {
    if(a===0) break;
    
    const maxEdge = Math.max(a,b,c);
    
    if(2 * maxEdge >= a + b + c) {
        console.log("Invalid");
    } else {
        const edgeSet = new Set([a,b,c]); // new Set( Array )
        const size = edgeSet.size;
        switch (size) {
            case 1:
                console.log("Equilateral");
                break;
            case 2:
                console.log("Isosceles");
                break;
            case 3:
                console.log("Scalene");
                break;
        }
    }
}