function solution(genres, plays) {
	// genre: totalPlays
    const map = new Map();
    for(let i = 0; i < genres.length; i++){
        if(map.has(genres[i])){
            map.set(genres[i], map.get(genres[i]) + plays[i]);
        }else{
            map.set(genres[i], plays[i]);
        }
    }
    
    const mapToArray = [...map];
    mapToArray.sort((a,b) => b[1] - a[1]);
    const rankingArray = mapToArray.map(x => x[0]);
    
    // genre: [...[index, plays]...]
	const map2 = new Map();
    for(let i = 0; i < genres.length; i++){
        if(map2.has(genres[i])){
            map2.get(genres[i]).push([i, plays[i]]);
        }else{
            map2.set(genres[i], [[i, plays[i]]]);
        }
    }
    
    const answer = [];
    
    for(let x of rankingArray){
        map2.get(x).sort((a,b) => b[1] - a[1]);
        if(map2.get(x).length >= 2){
            answer.push(map2.get(x)[0][0]);
            answer.push(map2.get(x)[1][0]);
        }else{
            answer.push(map2.get(x)[0][0]);
        }
    }
    
    return answer;
}
