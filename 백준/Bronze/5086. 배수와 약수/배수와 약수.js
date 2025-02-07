const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(x => x.split(" ").map(Number));
input.map(x => {
    if(x[0]===0){return}
    if(x[0] <= x[1]){
        console.log(x[1] % x[0] === 0 ? "factor" : "neither");
    }else{
        console.log(x[0] % x[1] === 0 ? "multiple" : "neither");
    }
})
