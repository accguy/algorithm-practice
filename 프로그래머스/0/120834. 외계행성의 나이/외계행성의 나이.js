function solution(age) {
    var answer = '';
    age = String(age);
    for(let i = 0; i < age.length; i++){
        answer += String.fromCharCode(age[i].charCodeAt() + 49)
    }
    return answer;
}