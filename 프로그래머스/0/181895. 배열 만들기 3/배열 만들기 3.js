function solution(arr, intervals) {
    answer = [];
    intervals.forEach(([s,e]) => {
        answer = answer.concat(arr.slice(s,e+1));
    })
    return answer;
}