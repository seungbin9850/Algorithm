function solution(grades, weights, threshold) {
  let a = {
    "A+": 10,
    A0: 9,
    "B+": 8,
    B0: 7,
    "C+": 6,
    C0: 5,
    "D+": 4,
    D0: 3,
    F: 0,
  };
  return (
    grades
      .map((value, index) => a[value] * weights[index])
      .reduce((acc, cur) => acc + cur) - threshold
  );
}

console.log(solution(["A+", "D+", "F", "C0"], [2, 5, 10, 3], 50));
