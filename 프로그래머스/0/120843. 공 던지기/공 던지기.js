function solution(numbers, k) {
    const index = (((k*2 - 1) - 1) % numbers.length) ;
    return numbers[index];
}