function solution(num_list) {
    var answer = [];
    const length_num_list =num_list.length;
    for(let i = 0; i<length_num_list; i++){
        answer.push(num_list.pop());
    }
    return answer;
}