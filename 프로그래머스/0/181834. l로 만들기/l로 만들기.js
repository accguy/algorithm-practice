function solution(str) {
    return [...str].map(x => x.charCodeAt() < "l".charCodeAt() ? "l":x).join("");
}