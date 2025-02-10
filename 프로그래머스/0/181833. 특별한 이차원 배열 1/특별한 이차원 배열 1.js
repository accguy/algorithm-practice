function solution(n) {
    return Array.from({length: n}, () => Array(n).fill(0)).map((x,i)=>{
        x[i]=1;
        return x;
    });
}