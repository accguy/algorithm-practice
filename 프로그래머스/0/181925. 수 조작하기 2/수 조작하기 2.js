function solution(numLog) {
    const control = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a",
    }
    const diffArr = Array.from({length: numLog.length-1}, (_,i)=>numLog[i+1]-numLog[i]);
    return diffArr.map(x=>control[x]).join("");
}

// const control = new Map([
//     [1, "w"],
//     [-1, "s"],
//     [10, "d"],
//     [-10, "a"],
// ]) 