function solution(array, n) {
    var answer = 0;
    let diff = Infinity;
    array.map(x => {
        if(Math.abs(x-n) < diff) {
            answer = x;
            diff = Math.abs(x-n);
        } else if(Math.abs(x-n) === diff && x < answer) {
            answer = x;
            diff = Math.abs(x-n);
        }
    })
    return answer;
}