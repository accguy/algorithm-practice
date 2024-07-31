function solution(sides) {
    var answer = 0;
    const b = Math.max(...sides);
    const a = Math.min(...sides);
    for (let i = b - a + 1; i < a + b; i++) {
        answer++;
    }
    return answer;
}