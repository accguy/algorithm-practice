function solution(a, b, c, d) {
    const arr = [a,b,c,d];
    const size = new Set(arr).size;
    const count = Array(7).fill(0); // 1~6의 개수를 저장할 배열
    
    for(let i = 0; i < arr.length; i++){
        const cur = arr[i];
        count[cur]++;
    }

    switch (size) {
        case 1: 
            return 1111 * a;
        case 2:
        {
            const p = count.indexOf(3);
            if(p != -1) {
                // 3+1 의 경우
                const q = count.indexOf(1);
                return (10 * p + q)**2;         
            } else {
                // 2+2 의 경우
                // 블록 내의 새로운 블록이기때문에 const 재선언 가능
                const [p,q] = count.map((x,i)=>x? i:null).filter(i=>i); 
                return (p + q) * Math.abs(p - q);            
            }
        }
        case 3: 
        {
            const [p,q] = count.map((x,i)=>x==1?i:null).filter(i=>i);
            return p * q;     
        }      
        case 4:
            return Math.min(...arr);                
    }
}

// 