function solution(N, stages) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let reachStageArr = stages.filter((e) => e >= i);
    let notClearArr = stages.filter((e) => e === i);
    if (reachStageArr.length === 0) arr.push(0);
    else arr.push(notClearArr.length / reachStageArr.length);
  }
  let originalAnswer = arr.slice();
  let sortedAnswer = arr.sort((a, b) => {
    return b - a;
  });
  let answer = [];
  for (let i = 0; i < sortedAnswer.length; i++) {
    answer.push(originalAnswer.indexOf(sortedAnswer[i]) + 1);
    originalAnswer[originalAnswer.indexOf(sortedAnswer[i])] = null;
  }
  return answer;
}
