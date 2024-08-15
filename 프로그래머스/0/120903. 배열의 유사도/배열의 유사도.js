function solution(s1, s2) {
    var answer = 0;
    s1.map(x => {
        if(s2.includes(x)){
            answer++;
        }
    })
    return answer;
}