function solution(n, t) {
    const a = t/n + (1-n)/2;
    return Array.from({length: n}, (_, i) => a + i)
}