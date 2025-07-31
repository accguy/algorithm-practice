const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const map = new Map();
for(let i = 1; i <= N; i++) {
    const name = input[i];
    map.set(name, String(i));
    map.set(String(i), name);
}
for(let i = N+1; i <= N+M; i++) {
    console.log(map.get(input[String(i)]));
}