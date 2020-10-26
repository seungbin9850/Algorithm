function solution(n) {
  var answer = [];
  let rest;
  while (n > 0) {
    rest = n % 3;
    n = Math.floor(n / 3);
    if (rest === 1) answer.unshift("1");
    else if (rest === 2) answer.unshift("2");
    else {
      answer.unshift("4");
      n -= 1;
    }
  }
  return answer.join("");
}
