function solution(answers) {
    const students = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const scores = students.map((student) => {
        const score = answers.reduce((a,c,i) => answers[i]===student[i%student.length] ? a+1:a, 0);
        return score;
    })  
    const maxScore = Math.max(...scores);
    const answer = [];
    for(let i = 0; i < 3; i++){
        if(scores[i]===maxScore){
            answer.push(i+1);
        }
    }
    return answer;
}