function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        let sum = 0;
        arr1.forEach((x, i) => {
            sum += x - arr2[i];
        });
        return sum === 0 ? 0 : sum > 0 ? 1 : -1;
    }
    
}