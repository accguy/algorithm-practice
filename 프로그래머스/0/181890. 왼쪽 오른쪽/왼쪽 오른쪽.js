function solution(list) {
    var answer = [];
    let i = 0;

    while(i < list.length) {
        if(list[i] == "l"){
            return list.slice(0,i);
        } else if(list[i] == "r"){
            return list.slice(i+1);
        }
        i++;
    }
    return [];
}