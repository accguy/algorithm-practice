const input = require('fs').readFileSync(0,"utf-8").toString().trim().split("\n");
const [A,B,C] = input[0].split(" ").map(Number);
const parkTimes = input.slice(1).map(x => x.split(" ").map(Number));
const timeLine = Array(101).fill(0); // 차가 들어오고 나가는 정보만 기록

for(const [s, e] of parkTimes){
    timeLine[s]++; // s분에 차가 1대 들어옴
    timeLine[e]--; // e분에 차가 1대 나감
}

// 누적합 풀이법
let answer = 0, count = 0;
for(let i = 0; i < timeLine.length; i++){
    count += timeLine[i]; // i분에 차가 몇대 있는지 정보 갱신
    switch(count){
        case 0: break;
        case 1: 
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