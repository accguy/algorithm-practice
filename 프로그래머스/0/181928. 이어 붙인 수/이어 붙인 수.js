function solution(list) {
    let oddSum = "";
    let evenSum = "";
    list.forEach(x => {
        if(x%2){
            oddSum += x;
        }else{
            evenSum += x;
        }
    })
    return +oddSum + +evenSum;
}