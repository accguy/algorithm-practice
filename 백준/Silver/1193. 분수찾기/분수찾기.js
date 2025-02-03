const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let level = 1;
let count = 1;

while(N > count){
    count += level + 1;
    level++;
}

console.log(level%2==0 ? `${level-(+count-N)}/${1+count-N}`:`${1+count-N}/${level-(+count-N)}`);