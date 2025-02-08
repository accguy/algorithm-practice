function solution(arr, n) {
    return arr.map((x, i) => x + ((arr.length % 2) ^ (i % 2)) * n ); 
    // arr 길이 짝수 : 인덱스 홀수 -> n 더함 (XOR)
    // ^ 보다 * 이 먼저임 주의할것.
}