function solution(n) {
    return n
        .toString()
        .split("")
        .reduce((a, c) => a + (+c), 0)
}