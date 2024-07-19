function solution(n) {
    n.sort((a,b) => a-b);
    return Math.max(n[0]*n[1], n.at(-1)*n.at(-2));
}