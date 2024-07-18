function solution(my_string) {
    var answer = '';
    for (const x of my_string) {
        if(x===x.toUpperCase()){
            answer += x.toLowerCase()
        }else if(x===x.toLowerCase()){
            answer += x.toUpperCase()
        }
    }
    return answer;
}