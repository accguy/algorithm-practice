function solution(n) {
    n.sort((a,b) => a-b);n.at(-1)*n.at(-2);
    return n[0]*n[1] > n.at(-1)*n.at(-2) ?  n[0]*n[1] : n.at(-1)*n.at(-2);
}