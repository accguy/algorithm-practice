function solution(N, number) {
    // N을 i번 사용한 숫자들의 집합 배열
    let dp = Array.from({length: 9}, () => new Set);
    
    for(let i = 1; i < 9; i++) {
        // {N}, {NN}, {NNN}, ... 으로 초기화 
        dp[i].add(Number(String(N).repeat(i)));
        
        // i = j + (i-j) 
        for(let j = 1; j < i; j++) {
            for(let x of dp[j]) {
                for(let y of dp[i-j]) {
                    dp[i].add(x+y);
                    dp[i].add(x-y);
                    dp[i].add(x*y);
                    if(y!==0){
                        dp[i].add(x/y);    
                    }
                }
            }
        }
        
        if(dp[i].has(number)) return i;
    }
    return -1;
}