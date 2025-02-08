function solution(myString, pat) {
    const newStr = myString.replaceAll("A", "C").replaceAll("B", "A").replaceAll("C", "B");
    return newStr.includes(pat) ? 1 : 0;
}