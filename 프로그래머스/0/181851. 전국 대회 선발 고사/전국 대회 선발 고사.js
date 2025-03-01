function solution(rank, attendance) {
    let count = 0;
    rank = rank.map((v,i) => attendance[i] ? [v,i] : null);
    rank = rank.filter(x=>x); // null 제거
    rank.sort((a,b)=>a[0]-b[0]);
    return rank[0][1]*10000 + rank[1][1]*100 + rank[2][1];
}