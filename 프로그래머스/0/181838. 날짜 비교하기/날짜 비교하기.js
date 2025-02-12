function solution(date1, date2) {
    console.log(new Date(date1));
    return new Date(date1) < new Date(date2) ? 1 : 0;
}
