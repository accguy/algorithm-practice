function solution(m, o, s) {
    return m.slice(0,s) + o + m.slice(s + o.length , m.length);
}