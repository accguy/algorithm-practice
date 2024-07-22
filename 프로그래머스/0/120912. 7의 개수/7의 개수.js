function solution(array) {
    return array.map(x => [...String(x)].filter(x => x==7).length).reduce((acc, cur) => acc += cur, 0)
}