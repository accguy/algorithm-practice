function solution(p) {
    const arr = p.split(" + ");
    const xArr = arr.filter(x => x[x.length-1]=='x')
                .map(x => x=='x' ? 1 : Number(x.slice(0, x.length-1)));
    const cArr = arr.filter(x => x[x.length-1]!='x')
                .map(Number);
    
    // console.log(xArr, cArr);
    const A = xArr.length ? xArr.reduce((a,c)=>a+c, 0) : 0;
    const B = cArr.length ? cArr.reduce((a,c)=>a+c, 0) : 0;
    
    let answer = [];
    if(A) answer.push(A == 1 ? `x` : `${A}x`);
    if(B) answer.push(`${B}`);
    
    return answer.join(" + "); // answer의 요소가 1개일때는 해당 문자열을 반환합니다.
}

// A = 1 일때 'x'로 바꿔주기 