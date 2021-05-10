function solution(participant, completion) {
  let arr = participant.concat(completion);
  let hash = arr.reduce((acc, p) => {
    acc[p] = acc[p] ? acc[p] + 1 : 1;
    return acc;
  }, {});
  for (let index in hash) {
    if (hash[index] % 2 === 1) return index;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
