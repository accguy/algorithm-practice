function solution(a, b, c) {
    const eq = i => a**i + b**i + c**i
    return a==b&&b==c ? eq(1)*eq(2)*eq(3) : a!=b&&b!=c&&c!=a ? eq(1) : eq(1)*eq(2);
}