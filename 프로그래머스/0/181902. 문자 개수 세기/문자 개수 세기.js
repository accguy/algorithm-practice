function solution(s) {
    const charCount = Array(52).fill(0);
    // A~Z: 65~90 -> 0~25
    // a~z: 97~122 -> 26~51
    for(let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt();
        if(code <= 90) {
            charCount[code-65] = (charCount[code-65] || 0) + 1;
        } else {
            charCount[code-71] = (charCount[code-71] || 0) + 1;
        }
    }
    return charCount;
}