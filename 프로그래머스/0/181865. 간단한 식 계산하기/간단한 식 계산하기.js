function solution(bi) {
    const [a,op,b] = bi.split(" ");

    if(op==="+"){
        return (+a)+(+b);
    }else if(op==="-"){
        return (+a)-(+b);
    }else if(op==="*"){
        return (+a)*(+b);
    }else{
        return;
    }
}