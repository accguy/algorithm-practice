const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
for(let i = 1; i <= N; i++){
    const [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}
arr.sort((a,b) => {
    return a[0]===b[0] ? a[1] - b[1] : a[0] - b[0];
})
for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i][0]} ${arr[i][1]}`);
}