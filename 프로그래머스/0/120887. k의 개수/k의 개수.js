function solution(i, j, k) {
    var answer = 0;
    k += "";
    for(let index = i; index <= j; index++){
        index += "";
        if(index.includes(k)){
            answer += [...index].filter(x => x === k).length;
        }
    }
    return answer;
}