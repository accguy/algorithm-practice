function solution(n, arr1, arr2) {
  var array = [];
  var answer = [];
  for (let i = 0; i < n; i++) {
    array.push((arr1[i] | arr2[i]).toString(2).padStart(n, 0));
  }
  array.map((v) => answer.push(v.replace(/1/g, "#").replace(/0/g, " ")));
  return answer;
}