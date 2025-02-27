function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    if(rows < cols) {
        for(let i = 0; i < cols - rows; i++){
            arr.push(Array(cols).fill(0));
        }
    } else if(rows > cols){
        arr.forEach(x => {
            for(let i = 0; i < rows - cols; i++){
                x.push(0);   
            }
        })
    }
    return arr;
}