function solution(s) {
    const data = {};
    // A~Z: 65~90 
    // (91~96) -> (26~31)
    // a~z: 97~122 
    for(let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt();
        data[code] = (data[code] || 0) + 1;
    }
    
    let list = Array(123).fill(0); // 0~122
    for(const key in data){
        list[key] = data[key];
    }
    
    list = list.slice(65);
    const A = list.slice(0,26);
    const B = list.slice(32);
    return A.concat(B);
}