function solution(list) {
    const lastIndex = list.length-1;
    list.push(list[lastIndex]>list[lastIndex-1]?list[lastIndex]-list[lastIndex-1]:2*list[lastIndex]);
    return list;
}