function solution(n) {
    const arr = Array.from({length:n}, (_,i) => i + 1);
    if (n % 2 === 1){
        return arr.filter(x => x % 2 === 1).reduce((a,c) => a + c, 0);
    } else {
        return arr.filter(x => x % 2 === 0).reduce((a,c) => a + c**2, 0);
    }
}