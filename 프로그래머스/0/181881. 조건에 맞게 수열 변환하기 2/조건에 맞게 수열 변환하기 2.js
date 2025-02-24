function solution(arr) {
    const doubleArr = x => {
        return x.map(el => {
            if(el >= 50 && !(el%2)) {
                return el / 2;
            } else if (el < 50 && el%2) {
                return el*2 + 1;
            } else {
                return el;
            }
        })
    }
    
    let count = 0;
    while(JSON.stringify(doubleArr(arr)) !== JSON.stringify(arr)) {
        count++;
        arr = doubleArr(arr);
    }
    return count;
}