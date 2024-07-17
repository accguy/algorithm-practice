function solution(cipher, code) {
    var answer = '';
    const arr = [...cipher];
    for(let i = code-1; i < arr.length; i += code){
        answer += arr[i];
    }
    return answer;
}