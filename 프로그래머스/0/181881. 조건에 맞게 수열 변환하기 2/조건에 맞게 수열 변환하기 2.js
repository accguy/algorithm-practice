function solution(arr) {
    const transform = array => {
        return array.map(el => 
             el >= 50 && !(el%2) ? el / 2 :
             el < 50 && (el%2) ? 2*el + 1 : el)
    }
    
    let count = 0;
    let newArr = transform(arr);
    
    // 배열의 길이는 항상 같음
    while(!newArr.every((v,i) => v === arr[i])) {
        count++;
        arr = newArr;
        newArr = transform(arr);
    }
    return count;
}