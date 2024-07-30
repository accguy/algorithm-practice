function solution(N) {
    var answer = 0;
    for(let n = 4; n <= N; n++){
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                answer++;
                break;
            }    
        }
    }
    return answer;
}