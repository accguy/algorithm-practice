function solution(arr) {
    return arr.map((x, i) => {
        if(i%2==0){
            return x.toLowerCase();
        } else {
            return x.toUpperCase();
        }
    })
}