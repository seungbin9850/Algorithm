function solution(money, expected, actual) {
  let answer = 0;
  let bet = 100;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] === actual[i]) {
      answer += bet;
      console.log(answer, bet);
      bet = 100;
    } else {
      answer -= bet;
      bet *= 2;
    }
  }
  return money + answer;
}

console.log(
  solution(
    1000,
    ["H", "T", "H", "T", "H", "T", "H"],
    ["T", "T", "H", "H", "T", "T", "H"]
  )
);
