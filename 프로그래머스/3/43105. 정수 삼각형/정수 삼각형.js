// 바텀업...!
function solution(t) {
	const n = t.length; // 삼각형의 높이
    const dp = [...t[n-1]]; // 삼각형 마지막 줄
    
    for(let i = n - 2; i >= 0; i--){
        for(let j = 0; j < t[i].length; j++){
            dp[j] = t[i][j] + Math.max(dp[j], dp[j+1])
        }
    }
	return dp[0];
}