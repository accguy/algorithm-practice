function solution(lines) {
    lines = lines.map(([a,b]) => [a+100, b+100]);
    const record = Array(201).fill(0);
    for(let [s, e] of lines) {
        record[s]++;
        record[e]--;
    }
    let answer = 0;
    let current = 0;
    for(let i = 0; i < record.length; i++) {
        current += record[i];
        if(current >= 2) answer++;
    }
    return answer;
}