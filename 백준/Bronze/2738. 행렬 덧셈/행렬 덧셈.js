const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

for (let i = 1; i < N + 1; i++){
    const arr1 = input[i].split(" ").map(Number);
    const arr2 = input[i + N].split(" ").map(Number);
    const arr3 = [];
    for(let j = 0; j < arr1.length; j++){
        arr3.push(arr1[j] + arr2[j]);
    }
    console.log(...arr3)
}