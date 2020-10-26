function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(false);
  function DFS(index) {
    visited[index] = true;
    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}
