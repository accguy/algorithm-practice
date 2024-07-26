function solution(s) {  
    const uniqueArr = [...new Set(s)]; // 중복이 제거된 배열
    return uniqueArr
            .filter(x => [...s].filter(y => y === x).length == 1)
            .sort().join("")
}