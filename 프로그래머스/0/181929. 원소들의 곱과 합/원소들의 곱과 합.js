function solution(list) {
    const 합의제곱 = (list.reduce((a,c) => a+c, 0))**2;
    const 곱 = list.reduce((a,c) => a*c, 1)
    return 곱 < 합의제곱 ? 1 : 0;
}