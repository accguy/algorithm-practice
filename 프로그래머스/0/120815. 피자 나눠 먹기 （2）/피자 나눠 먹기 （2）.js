function solution(n) {
    var answer = 0;
    // 최대공약수를 먼저 구한다.
    function GCD(a,b){
        while(b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // 최소공배수 = 두수의 곱 / 최대공약수     
    return (n * 6) / GCD(n, 6) / 6;
}