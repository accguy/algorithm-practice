const gcd = (a, b) => {
    // 최대 공약수 구하는 함수
    // 유클리드 호제법
    if(a < b) [a,b] = [b,a];
    while(b > 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function solution(a, b) {
    // (a/b) 를 기약 분수로 나타내기
    const GCD = gcd(a,b);
    let n = b / GCD;
    while(n % 2 === 0){
        n /= 2;
    }
    while(n % 5 === 0){
        n /= 5;
    }
    if(n===1){return 1}else{return 2}
    
}