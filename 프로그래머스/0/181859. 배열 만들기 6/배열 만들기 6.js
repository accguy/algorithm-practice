function solution(arr) {
    let stk = [];
    for(let x of arr) {
        if(stk.length === 0){
            stk.push(x);
        } else {
            const last = stk.at(-1);
            if(last === x) {
                stk.pop();
            } else {
                stk.push(x);
            }
        }
    }
    
    return stk.length ? stk : [-1];
}