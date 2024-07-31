function solution(dartResult) {
    var array = dartResult.match(/(\d+)([SDT])([*#]?)/g);
    var answer = array.map(v => parseInt(v.match(/\d+/)));
    // 제곱, 세제곱 계산하기 
    for (let i = 0; i < 3; i++){
        if (array[i].match(/[SDT]/)[0] == "D") {
            answer[i] **= 2;
        } else if (array[i].match(/[SDT]/) == "T") {
            answer[i] **= 3;
        }
    }
    // *, # 계산하기
    for (let i = 0; i < 3; i++) {
        if (array[i].match(/[*#]/) == "*") {
            answer[i] *= 2;
            answer[i-1] *= 2;
        } else if (array[i].match(/[*#]/) == "#"){
            answer[i] *= -1;
        }
    }
    return answer.reduce((a, c) => a + c);
}