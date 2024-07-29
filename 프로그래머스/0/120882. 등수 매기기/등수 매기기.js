function solution(score) {
    const sumArr = score.map(x => x[0] + x[1]);
    const soretedSumArr = [...sumArr].sort((a,b)=>b-a);
    return sumArr.map(x => soretedSumArr.indexOf(x)+1);
}