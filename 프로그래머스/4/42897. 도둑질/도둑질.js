function solution(money) {
    const n = money.length;
    if (n === 3) return Math.max(...money);
    let dp1 = Array(n).fill(0);
    let dp2 = Array(n).fill(0);
    // 1. 첫번째 집을 고르면 마지막 집은 못고름
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1])
    for (let i = 2; i < n-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + money[i]);
    }
    // 2. 첫번째 집을 고르지 않으면 마지막 집 고르는게 가능
    dp2[1] = money[1]
    dp2[2] = Math.max(money[1], money[2])
    for (let i = 3; i < n; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + money[i]);
    }
    
    return Math.max(dp1[n-2], dp2[n-1]);
    
}