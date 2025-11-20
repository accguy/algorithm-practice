const input = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
for(let i = 1; i <= +input[0]; i++) {
    const [H, W, N] = input[i].split(" ").map(Number);
    const level = N % H || H;
    const number = Math.ceil(N / H);
    console.log(level*100 + number);
}