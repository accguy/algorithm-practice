function solution(my_string) {
    return my_string
        .split("")
        .filter(item => !isNaN(Number(item)))
        .reduce((acc,cur) => acc + Number(cur), 0);
}