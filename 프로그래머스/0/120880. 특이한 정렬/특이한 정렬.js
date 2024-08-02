function solution(numlist, n) {
  var answer = [];
  const m = new Map();

  for (const x of numlist) { m.set(x, Math.abs(n - x)); }
  const array = [...m].sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][1] == array[i+1][1] && array[i][0] < array[i+1][0]) {
      answer.push(array[i+1][0]);
      array[i+1] = array[i];
    } else {
      answer.push(array[i][0]);
    }
  }
  answer.push(array[array.length-1][0]);
  return answer;
}