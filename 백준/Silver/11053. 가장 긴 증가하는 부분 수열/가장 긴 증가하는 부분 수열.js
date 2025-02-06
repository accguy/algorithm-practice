const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const N = Number(input[0]);
const data = input[1].split(" ").map(Number);

const getLowerBound = (arr, target) => {
    let le = 0;
    let ri = N;
    while(le < ri){
        const mid = Math.floor((le + ri)/2);
        if(arr[mid] < target){
            le = mid + 1;
        } else {
            ri = mid;
        }
    }
    return le;
}

let lis = [];
data.map(x => {
    const pos = getLowerBound(lis, x);
    if(pos===lis.length){
        lis.push(x);
    }else{
        lis[pos] = x;
    }
})

console.log(lis.length);