function solution(numlist, n) {
  var answer = [];
  const m = new Map();

  for (const x of numlist) { m.set(x, Math.abs(n - x)); }
  const array = [...m].sort((a, b) => {
      // 차이가 같다면 값을 기준으로 정렬(내림차순)
      if (a[1] == b[1]) { return b[0] - a[0]; } 
      // 차이가 다르다면 차이를 기준으로 정렬(오름차순)
      else { return a[1] - b[1]; }
  });
  array.map(v=>answer.push(v[0]))
  return answer;
}