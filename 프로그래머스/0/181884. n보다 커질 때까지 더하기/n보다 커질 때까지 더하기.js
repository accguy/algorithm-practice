function solution(numbers, n) {
    return numbers.reduce((a, c) => (a <= n) ? a + c : a, 0);
    // 리듀스는 누적값을 뱉어낸다.
}