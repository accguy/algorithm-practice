function solution(picture, k) {
    picture = picture.map(x => {
        return x.split("").map(y => y.repeat(k)).join("");
    });
    const answer = [];
    picture.forEach(x => {
        for(let i = 0; i < k; i++){
            answer.push(x);
        }
    })
    
    return answer;
}