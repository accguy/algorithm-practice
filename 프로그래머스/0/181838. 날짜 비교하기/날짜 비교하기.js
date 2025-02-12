function solution(date1, date2) {
    const d = date1.map((x,i)=>x-date2[i]);
    if(d[0]<0){return 1}
    if(d[0]==0&&d[1]<0){return 1}
    if(d[0]==0&&d[1]==0&&d[2]<0){return 1}
    return 0;
}
