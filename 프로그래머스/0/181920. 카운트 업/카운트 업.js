function solution(s, e) {
    return Array(e-s+1).fill(s).map((x,i)=>x+i);
}