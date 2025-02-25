function solution(arr) {
    let stk = [];
    
    for(let x of arr) {
        const last = stk[stk.length - 1];
        if(x === last) {
            stk.pop();
        } else { 
            // stk가 빈 배열인 경우도 포함됨.
            stk.push(x);
        }
    }
    return stk.length ? stk : [-1];
}