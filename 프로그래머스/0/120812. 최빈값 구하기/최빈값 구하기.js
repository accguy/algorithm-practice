// lv.0 최빈값 구하기
function solution(array) {
  var answer = 0;
  const setOfArray = [...new Set(array)]; // 중복 제거한 배열
  let cntArray = []; // 빈도수 저장할 배열

  // 빈도수 계산
  setOfArray.forEach((item, index) => {
    cntArray[index] = array.filter((x) => x === item).length;
  });

  // 가장 큰 빈도수
  const maxCnt = Math.max(...cntArray);
  // 가장 큰 빈도수가 2개 이상인지 체크
  const isDuplicated =
    cntArray.filter((x) => x === maxCnt).length >= 2 ? true : false;
  // 가장 큰 빈도수가 2개 이상이면 -1
  if (isDuplicated) {
    answer = -1;
  } else {
    answer = setOfArray[cntArray.indexOf(maxCnt)];
  }
  return answer;
}