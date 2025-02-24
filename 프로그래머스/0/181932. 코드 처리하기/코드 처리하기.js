function solution(code) {
    let answer = '';
    let mode = false; // 0: false, 1: true
    
    for(let i = 0; i < code.length; i++) {
        if(code[i]==="1"){ 
            mode = !mode;
            continue;
        } else {
            answer += !mode && !(i%2) ? code[i] : mode && i%2 ? code[i] : '';
        }
    }
    return answer ? answer : "EMPTY";
}













// 1. code[i] 의 타입은 뭔지 생각해봐...
// 2. 