const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const matrix = [];
for(let i = 1; i <= N; i++){
    const row = input[i].split("");
    matrix.push(row);
}

const answer = [];
// (i, j): start point
for(let i = 0; i <= N-8; i++){
    for(let j = 0; j <= M-8; j++){
        // 8*8 부분 순회
        let countOfCaseB = 0;
        let countOfCaseW = 0;
        for(let row = i; row < i+8; row++){
            for(let col = j; col < j+8; col++){
                const currentColor = matrix[row][col];
                const expectedColorOfCaseB = (col + row) % 2 ? 'W' : 'B';
                const expectedColorOfCaseW = (col + row) % 2 ? 'B' : 'W';
                if(currentColor===expectedColorOfCaseB) countOfCaseB++;
                if(currentColor===expectedColorOfCaseW) countOfCaseW++;
            }
        }
        const minRepaintCount = countOfCaseB > countOfCaseW ? 64 - countOfCaseB : 64 - countOfCaseW;
        answer.push(minRepaintCount);
    }
}
console.log(Math.min(...answer));