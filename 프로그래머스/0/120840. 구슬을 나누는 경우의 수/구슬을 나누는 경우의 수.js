function solution(balls, share) {
    const factorial = (n) => {
        let result = 1;
        for(let i = 1; i <= n; i++){
            result *= i;
        }
        return result;
    } 
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}