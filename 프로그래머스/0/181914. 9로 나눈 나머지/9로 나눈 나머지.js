function solution(n) {
    return [...n].map(Number).reduce((a,c)=>a+c,0)%9;
}