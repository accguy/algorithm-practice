function solution(str, queries) {
    queries.forEach(([s,e]) => {
        str = str.slice(0,s) + [...str.slice(s,e+1)].reverse().join("") + str.slice(e+1);
    })
    return str;
}