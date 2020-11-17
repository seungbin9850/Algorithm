function solution(s, op) {
  let answer = [];
  let arr = [];
  for (let i = 1; i < s.length; i++) {
    arr[0] = s.slice(0, i);
    arr[1] = s.slice(i);
    switch (op) {
      case "+":
        answer.push(Number(arr[0]) + Number(arr[1]));
        break;
      case "-":
        answer.push(Number(arr[0]) - Number(arr[1]));
        break;
      case "*":
        answer.push(Number(arr[0]) * Number(arr[1]));
        break;
    }
  }
  return answer;
}

console.log(solution("987987", "-"));
