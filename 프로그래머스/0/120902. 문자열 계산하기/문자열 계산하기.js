function solution(my_string) {
    const arr = my_string.split(" ");
    var answer = +arr.shift();
    for(let i = 0; i < arr.length; i+=2){
        if(arr[i] === "+"){
            answer += +arr[i+1];
        }else{
            answer -= +arr[i+1];
        }
    }
    return answer;
}