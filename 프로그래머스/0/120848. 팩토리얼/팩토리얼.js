function solution(n) {
    var answer = 0;
    
    const getFactorial = x => {
        let factorial = 1;
        for(let i = 2; i <= x; i++){
            factorial *= i;
        }
        return factorial;
    }
    
    for(let i = 1; i <= 10; i++){
        if(getFactorial(i)>n){
            answer = i-1;
            break;
        }else if(getFactorial(i)==n){
            answer = i;
            break;
        }
    }
    return answer;
}