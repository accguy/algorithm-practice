function solution(clothes) {
    const map = new Map();
    // 종류를 key로 설정하고, value에 배열로 옷들을 저장함
	for(let [name, type] of clothes){
        if(map.has(type)){
            map.set(type, [...map.get(type), name]);
        }else{
            map.set(type, [name]);
        }
    }
    // 옷의 가짓수를 곱해서 경우의 수를 구함
    let answer = 1;
    for(let [_, value] of map){
        answer *= value.length + 1;
    }
    
    return answer - 1; // 아예 안입는 경우는 제외
}