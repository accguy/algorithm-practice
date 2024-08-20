function solution(A, B) {
    var answer = -1;
    for (let i = 0; i < A.length; i++) {
        if (A.slice(A.length - i, A.length) 
            + A.slice(0, A.length - i) === B) {
            answer = i;
            break;
        }
    }
    return answer;
}