function solution(my_string) {
    return my_string.replace(/[a-zA-Z]/g, '-').split('-').map(x=>Number(x)).reduce((acc,cur)=>acc+=cur);
}