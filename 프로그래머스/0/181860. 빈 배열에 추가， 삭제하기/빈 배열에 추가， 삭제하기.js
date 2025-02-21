function solution(arr, flag) {
    const stack = [];
    flag.forEach((x,index) => {
        if(x) {
            for(let i = 1; i <= 2*arr[index]; i++){
                stack.push(arr[index]);
            }
        } else {
            for(let i = 1; i <= arr[index]; i++){
                stack.pop();
            }
        }
    })
    return stack;
}