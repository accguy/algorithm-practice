function solution(arr, n) {
    if(arr.length % 2 === 0){
        return arr.map((x, i) => {
            if(i % 2 === 1) {
                return x + n;
            } else {
                return x;
            }
        })
    } else {
        return arr.map((x, i) => {
            if(i % 2 === 0) {
                return x + n;
            } else {
                return x;
            }
        })
    }
    
}