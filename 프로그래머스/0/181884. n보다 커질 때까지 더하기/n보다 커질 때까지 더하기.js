function solution(numbers, n) {
    let ans = 0;
    for(let x of numbers) {
        ans += x;
        if(ans > n) return ans;
    }
}