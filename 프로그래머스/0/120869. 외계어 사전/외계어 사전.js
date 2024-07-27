function solution(spell, dic) {
    const sortWord = (item) => {
        return [...item].sort().join("");
    } 
    let sortedDic = [];
    // dic 내부의 아이템들은 문자열이기 때문에 수정이 불가능하다.
    // 따라서 새로운 배열을 만들어서 정렬된 문자열을 추가해준다.    
    dic.forEach(item => sortedDic.push(sortWord(item)))
    return sortedDic.includes(spell.sort().join("")) ? 1 : 2;
}