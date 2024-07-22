function solution(emergency) {
    const copy = [...emergency]
    const arr = emergency.sort((a,b) => b-a);
    return copy.map(x => arr.indexOf(x) + 1);
}