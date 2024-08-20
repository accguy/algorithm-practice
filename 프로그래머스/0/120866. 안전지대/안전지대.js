function solution(A) {
    let n = A.length;
    let answer = 0;
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    // Mark dangerous areas around each mine
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] === 1) { // Mine found
                directions.forEach(([di, dj]) => {
                    let ni = i + di, nj = j + dj;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && A[ni][nj] === 0) {
                        A[ni][nj] = 444; // Mark as dangerous
                    }
                });
            }
        }
    }
    
    // Count the number of safe cells
    A.forEach(array => {
        answer += array.filter(x => x === 0).length;
    })
    
    return answer;
}
