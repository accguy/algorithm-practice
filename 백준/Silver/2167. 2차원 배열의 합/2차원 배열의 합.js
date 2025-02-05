const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const K = Number(input[N+1]);

const data = [];
for(let i = 1; i <= N; i++){
    data.push(input[i].split(" ").map(Number));
}

const prefixSum = Array.from({length: N + 1}, () => Array(M + 1).fill(0));
// 2차원 누적합 계산
for(let i = 1; i <= N; i++){
    for(let j = 1; j <= M; j++){
        prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1] + data[i-1][j-1];
    }

}

for(let t = N + 2; t < N + 2 + K; t++) {
    const [i,j,x,y] = input[t].split(" ").map(Number);
    const answer = prefixSum[x][y] - prefixSum[i-1][y] - prefixSum[x][j-1] + prefixSum[i-1][j-1];
    console.log(answer);
}
