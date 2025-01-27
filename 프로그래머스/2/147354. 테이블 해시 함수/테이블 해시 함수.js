function solution(data, col, row_begin, row_end) {
	data.sort((a,b) => {
        // col번쩨 컬럼 기준 오름차순, 값이 같다면 첫번쩨 컬럼 기준 내림차순
        if(a[col-1] === b[col-1]){
            return b[0] - a[0];
        }
        return a[col-1] - b[col-1];
    });
    
    var answer = 0;
    for(let i = row_begin; i < row_end + 1; i++){
        const S_i = data[i-1].reduce((a,c) => a + c%i, 0);
        answer ^= S_i;
    }
    
    return answer;
}