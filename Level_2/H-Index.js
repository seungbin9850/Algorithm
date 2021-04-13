function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b);
  for (let i = citations.length - 1; i >= 0; i--) {
    let min =
      citations[i] < citations.length - i ? citations[i] : citations.length - i;
    if (answer < min) answer = min;
  }
  return answer;
}

console.log(solution([10, 9, 4, 1, 1]));
