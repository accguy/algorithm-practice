function solution(array) {
    var answer = [];
    const maxNum = Math.max(...array)
    answer.push(maxNum);
    answer.push(array.indexOf(maxNum));
    return answer;
}