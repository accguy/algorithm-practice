function solution(n) {
    let array = Array(500).fill(0).map((v, i) => i+1); // [1,2,3,4,...,1000]
    array = array.filter(x => x%3!==0 && ![...(x+"")].includes("3"));
    return array[n-1];
}