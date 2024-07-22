function solution(babbling) {
    var answer = 0;
    babbling.forEach((item) => {
        if(item.split("aya").join("-").split("ye").join("-").split("woo").join("-").split("ma").join("").replaceAll("-", "")===""){answer++}
    }) 
    return answer;
}