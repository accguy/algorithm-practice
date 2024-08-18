function solution(balls, share) {
    const min = Math.min(share, balls - share);
    let numerator = 1;
    let denominator = 1;
    
    for (let i = 0; i < min; i++) {
        numerator *= (balls - i);
        denominator *= (i + 1);
    }
    
    return numerator / denominator;
}
