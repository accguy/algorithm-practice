// 소수인지 판별하는 함수
const isPrime = x => {
    if(x === 1) return false;
    for(let i = 2; i <= Math.sqrt(x); i++) { // x의 제곱근까지만 탐색
        if(x % i === 0) return false;
    }
    return true;
}

function solution(n) {
    const set = new Set();
    let currentPrime = 2; // 현재 소수 
    
    while(n > 1) {
        // 현재 소수가 소수가 아니라면 1 증가
        if(!isPrime(currentPrime)) {
            currentPrime++;
            continue; 
        };
        
        // 현재 소수로 나눠지는 경우
        if(n % currentPrime === 0) {
            n /= currentPrime;
            if(!set.has(currentPrime)) { // set에 소인수 없으면 추가
                set.add(currentPrime);
            }
        } else { // 현재 소수로 나눠지지 않는 경우 1 증가
            currentPrime++;
        }
    }

    return [...set]; // 집합을 spread 문법 사용하여 배열로 변경
}