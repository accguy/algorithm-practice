function solution(p) {
    const arr = p.split(" + ");
    const xArr = arr.filter(x => x.includes('x'))
                .map(x => x=='x' ? 1 : Number(x.replace('x','')));
    const cArr = arr.filter(x => !x.includes('x'))
                .map(Number);
    
    const A = xArr.length ? xArr.reduce((a,c)=>a+c, 0) : 0;
    const B = cArr.length ? cArr.reduce((a,c)=>a+c, 0) : 0;
    
    let answer = [];
    if(A) answer.push(A == 1 ? `x` : `${A}x`); // A = 1 일때 'x'로 바꿔주기 
    if(B) answer.push(`${B}`);
    
    return answer.join(" + "); // answer의 요소가 1개일때는 해당 문자열을 반환합니다.
}