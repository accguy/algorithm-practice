const input = require('fs').readFileSync(0,"utf-8").split("\n");
const N = Number(input[0]);
const record = new Set();
for(let i = 1; i <= N; i++) {
    const [name, message] = input[i].split(" ");
    if(message==="enter") {
        record.add(name);
    } else {
        record.delete(name);
    }
}
const arr = [...record].sort().reverse();
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
