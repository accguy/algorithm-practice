function solution(arr, k) {
    const set = new Set(arr);
    const answer = [...set].slice(0, k);
    return answer.length < k ? answer.concat(Array(k-answer.length).fill(-1)) : answer;
}