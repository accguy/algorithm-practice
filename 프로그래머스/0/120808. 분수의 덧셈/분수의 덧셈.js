function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const numer = numer1*denom2 + numer2*denom1;
    const denom = denom1*denom2;
    
    let gcd = (a, b) => {
        if (b > a) [a, b] = [b, a]; // SWAP
        while(b != 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const gcdValue = gcd(numer,denom)
    answer.push(numer/gcdValue);
    answer.push(denom/gcdValue);
    return answer;
}