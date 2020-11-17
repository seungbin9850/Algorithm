function solution(grades, weights, threshold) {
  let answer = 0;
  for (let i = 0; i < grades.length; i++) {
    switch (grades[i]) {
      case "A+":
        answer += 10 * weights[i];
        break;
      case "A0":
        answer += 9 * weights[i];
        break;
      case "B+":
        answer += 8 * weights[i];
        break;
      case "B0":
        answer += 7 * weights[i];
        break;
      case "C+":
        answer += 6 * weights[i];
        break;
      case "C0":
        answer += 5 * weights[i];
        break;
      case "D+":
        answer += 4 * weights[i];
        break;
      case "D0":
        answer += 3 * weights[i];
        break;
      case "F":
        answer += 0;
        break;
    }
  }
  return answer - threshold;
}

console.log(solution(["A+", "D+", "F", "C0"], [2, 5, 10, 3], 50));
