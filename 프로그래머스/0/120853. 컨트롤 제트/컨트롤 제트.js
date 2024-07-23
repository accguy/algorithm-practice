function solution(s) {
    var answer = 0;
    const array = s.split(" ");
    let beforeZ = 0;
    for(const x of array){
        if(!isNaN(x)){
            answer += Number(x)
        }else{
            answer -= Number(beforeZ)
        }
        beforeZ = x;
    }
    return answer;
}