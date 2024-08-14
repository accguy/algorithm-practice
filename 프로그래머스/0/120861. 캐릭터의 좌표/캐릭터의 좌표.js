function solution(keyinput, board) {
    let [x, y] = [0, 0];
    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;
    keyinput.map(item => {
        if(item === "left" && x > -maxX) {
            x -= 1;
        } else if(item === "right" && x < maxX) {
            x += 1;
        } else if(item === "down" && y > -maxY) {
            y -= 1;
        } else if (item === "up" && y < maxY){
            y += 1;
        } 
    })

    return [x, y];
}