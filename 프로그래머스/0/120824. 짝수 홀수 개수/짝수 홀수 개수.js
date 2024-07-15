function solution(num_list) {
    var answer = [];
    let even_cnt = 0;
    let odd_cnt = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0){
            even_cnt++
        }else{
            odd_cnt++
        }
    }
    answer.push(even_cnt)
    answer.push(odd_cnt)
    return answer;
}