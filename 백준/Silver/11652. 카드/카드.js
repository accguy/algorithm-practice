const input = require('fs').readFileSync(0,'utf-8').toString().trim().split("\n").map(BigInt);
const N = input[0];
const map = new Map();
for(let i = 1; i <= N; i++){
    const num = input[i];
//  map.set(num, map.get(num) + 1 || 1); // X
    map.set(num, (map.get(num)||0n) + 1n); // O
}
// const arr = Array(map); // 이게 잘못됨 -> 그냥 배열에 객체가 통째로 담김
// 스프레드 연산자를 사용하기!!
const arr = [...map];
arr.sort((a,b) => {
    if(a[1]==b[1]) return a[0] < b[0] ? -1 : 1;
    return a[1] > b[1] ? -1 : 1;
});
console.log(arr[0][0].toString());

// BigInt
// 자바스크립트에서 안전한 정수 범위는 ±2^53-1까지임.