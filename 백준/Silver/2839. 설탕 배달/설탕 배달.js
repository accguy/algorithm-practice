const N = +require('fs').readFileSync(0,'utf-8').toString();
let five = Math.floor(N/5); // 5kg 봉투의 수
let rest = N - five * 5; // 남은 양
while(rest % 3 !== 0 && five > 0){
    five--;
    rest = N - five * 5;
}

const answer = rest % 3 === 0 ? five + rest/3 : -1;
console.log(answer);
