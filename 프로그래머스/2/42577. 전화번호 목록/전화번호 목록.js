function solution(p) {
    p.sort(); // 사전순으로 정렬 -> ex) 119, 11908, 120, 1204, 13,,,
    // 바로 다음 것만 비교하면 됨.
    // 다음것이 접두사를 포함하지 않는다면 그 다음것도 포함하지 않음.
    for(let i = 0; i < p.length - 1; i++){
        if(p[i+1].startsWith(p[i])){
            return false;
        }
    }
    return true;
}