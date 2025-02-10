function solution(bi) {
    const data = bi.split(" ");
    const a = +data[0];
    const b = +data[2];
    const op = data[1];
    if(op==="+"){
        return a+b;
    }else if(op==="-"){
        return a-b;
    }else if(op==="*"){
        return a*b;
    }else{
        return;
    }
}