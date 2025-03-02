function solution(a, b, c, d) {
    var answer = 0;
    const arr = [a,b,c,d];
    const size = new Set(arr).size;
    const count = Array(7).fill(0); // 1~6의 개수를 저장할 배열
    for(let i = 0; i < arr.length; i++){
        const cur = arr[i];
        count[cur]++;
    }

    switch (size) {
        case 1: 
            answer = 1111 * a;
            break;
        case 2:
            if(count.indexOf(2)==-1){
                // 3 + 1
                const p = count.indexOf(3);
                const q = count.indexOf(1);
                answer = (10 * p + q)**2 
                break;
            } else {
                // 2 + 2
                arr.sort();
                const p = arr[0];
                const q = arr[3];
                answer = (p + q) * Math.abs(p - q);
                break;  
            }
        case 3:
            const p = count.indexOf(1);
            const q = count.lastIndexOf(1);
            answer =  p * q;
            break;
        case 4:
            answer = Math.min(...arr);
            break;       
    }
    return answer;
}