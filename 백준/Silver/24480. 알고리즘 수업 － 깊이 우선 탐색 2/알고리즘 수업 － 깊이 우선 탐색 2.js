const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, M, R] = input[0].split(" ").map(Number);
const g = Array.from({length: N+1}, () => []);
for(let i = 1; i <= M; i++){
    const [a,b] = input[i].split(" ").map(Number);
    g[a].push(b);
    g[b].push(a);
}
for(let i = 1; i <= N; i++){
    g[i].sort((a,b) => b-a);
}

const visited = Array(N+1).fill(0);
let order = 0;

function dfs(node) {
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
