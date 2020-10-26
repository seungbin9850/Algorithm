function solution(board, moves) {
  var arr = new Array();
  var des = 0;
  for (var i = 0; i < moves.length; i++) {
    var pick = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][pick] > 0) {
        var doll = board[j][pick];
        arr.push(doll);
        board[j][pick] = 0;
        if (arr.length > 1) {
          var last = arr[arr.length - 1];
          var before = arr[arr.length - 2];
          if (last == before) {
            arr.pop();
            arr.pop();
            des += 2;
          }
        }
        break;
      }
    }
  }
  var answer = des;
  return answer;
}
