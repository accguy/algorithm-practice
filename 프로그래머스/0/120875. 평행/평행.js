function solution(dots) {
    const [x1, y1] = dots[0];
    const [x2, y2] = dots[1];
    const [x3, y3] = dots[2];
    const [x4, y4] = dots[3];
    
    if((y1-y2)/(x1-x2) === (y3-y4)/(x3-x4)) return 1;
    if((y2-y3)/(x2-x3) === (y1-y4)/(x1-x4)) return 1;
    
    return 0;
}