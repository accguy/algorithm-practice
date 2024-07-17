function solution(cipher, code) {
    var answer = '';
    const arr = [...cipher]
    arr.forEach((item,index) => {
        if((index+1)%code==0) answer += item;
    })
    return answer;
}