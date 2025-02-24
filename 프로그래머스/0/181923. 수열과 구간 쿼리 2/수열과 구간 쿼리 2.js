function solution(arr, queries) {
    const answer = [];
    for(let [s,e,k] of queries) {
        let minValue = Infinity;
        for(let i = s; i <= e; i++){
            if(arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
            }
        }
        answer.push(minValue !== Infinity ? minValue : -1);
    }
    return answer;
}