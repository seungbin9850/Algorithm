function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let copy = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });
    answer.push(copy[commands[i][2] - 1]);
  }
  return answer;
}
