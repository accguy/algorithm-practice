function solution(p, c) {
    const map = new Map();
    // 참가자 배열 해시맵에 저장하기
    for(let x of p) {
        if(map.has(x)){
            map.set(x, map.get(x) + 1);
        }else{
            map.set(x, 1);
        }
    }
    
    // 완주자 목록 순회하면서 카운트 감소
    for(let x of c) {
        map.set(x, map.get(x) - 1);
    }
    // value가 1인 key를 반환하기
    for(let [key, value] of map){
        if(value === 1){
            return key;
        }
    }
}