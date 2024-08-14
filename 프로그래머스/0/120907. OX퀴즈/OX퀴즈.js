function solution(quiz) {
    var answer = [];
    quiz.forEach(x => {
        const arr = x.split(" ");
        const sign = (arr[1] === "-") ? -1 : 1;
        if (+arr[0] + (sign * +arr[2]) === +arr[4]) {
            answer.push("O")
        }else {
            answer.push("X")
        }
    })
    return answer;
}