function solution(str, indices) {
    str = [...str];
    indices.forEach(index => {
        str.splice(index, 1, "REPLACE"); // 원본 배열 변경(대체)
    })
    return str.filter(x=>x!=="REPLACE").join("");
}