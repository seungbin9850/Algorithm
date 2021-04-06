function solution(numbers) {
  numbers.sort((a, b) => ("" + a + b > "" + b + a ? -1 : 1));
  if (Math.max(...numbers) <= 0) return "0";
  return numbers.join("");
}
console.log(solution([0, 0, 0, 0]));
