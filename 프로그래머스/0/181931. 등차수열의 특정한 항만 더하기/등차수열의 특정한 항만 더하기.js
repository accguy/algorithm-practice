function solution(a, d, included) {
    return included.reduce((acc,c,i)=> c ? acc + (d*i + a) : acc,0);
}