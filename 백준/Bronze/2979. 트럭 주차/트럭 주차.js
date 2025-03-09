const input = require('fs').readFileSync(0,"utf-8").toString().trim().split("\n");
const [A,B,C] = input[0].split(" ").map(Number);
const parkTimes = input.slice(1).map(x => x.split(" ").map(Number)).sort((a,b)=>b[1]-a[1]);
const end = parkTimes[0][1];
const start = parkTimes.sort((a,b)=>a[0]-b[0])[0][0];
const parkTimeSumArr = Array(end).fill(0);

for(const [s, e] of parkTimes){
    for(let i = s; i < e; i++){
        parkTimeSumArr[i]++;
    }
}

let answer = 0;
for(let i = start; i <= end; i++){
    switch(parkTimeSumArr[i]){
        case 1 : 
            answer += A;
            break;
        case 2:
            answer += 2*B;
            break;
        case 3:
            answer += 3*C;
            break;
    }
}
console.log(answer);