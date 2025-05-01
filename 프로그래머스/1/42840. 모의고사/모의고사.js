function solution(answers) {
    const students = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const result = students.map((stu) => {
        const score = answers.reduce((a,c,i) => answers[i]===stu[i%stu.length] ? a+1:a, 0);
        return score;
    })  
    const MAX = Math.max(...result);
    const ANSWER = [];
    for(let i = 0; i < 3; i++){
        if(result[i]===MAX){
            ANSWER.push(i+1);
        }
    }
    return ANSWER;
}


