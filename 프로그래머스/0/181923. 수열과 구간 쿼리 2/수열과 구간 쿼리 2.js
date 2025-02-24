function solution(arr, queries) {
    const answer = [];
    for(let [s,e,k] of queries) {
        const subArr = arr.slice(s,e+1).filter(x => x>k);
        answer.push(subArr.length ? Math.min(...subArr) : -1)
    }
    return answer;
}