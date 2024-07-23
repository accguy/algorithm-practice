function solution(bin1, bin2) {
    // 2진수로 표현된 문자열을 10진수로 변환
    var answer = parseInt(bin1, 2) + parseInt(bin2, 2); 
    // 10진수를 2진수 문자열로 변환     
    return answer.toString(2); 
}