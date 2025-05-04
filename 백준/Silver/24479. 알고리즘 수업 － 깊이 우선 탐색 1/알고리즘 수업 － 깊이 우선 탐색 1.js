const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, M, R] = input[0].split(" ").map(Number); // 정점, 간선, 시작노드

const g = Array.from({length: N + 1}, () => []); // 그래프
for(let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    g[a].push(b);
    g[b].push(a);
}
g.forEach(li => li.sort((a,b) => a-b));

const visited = Array(N+1).fill(0);
let order = 0;


const dfs = (node) => {
    visited[node] = ++order;
    for(const x of g[node]){
        if(!visited[x]){
            dfs(x);
        }
    }
}

dfs(R);
for(let i = 1; i <= N; i++){
    console.log(visited[i]);
}