function solution(genres, plays) {
  var answer;
  const genresHash = genres.reduce((acc, cur, index) => {
    if (!acc[cur]) {
      acc[cur] = {
        total: 0,
        list: [],
      };
    }
    acc[cur].total += plays[index];
    acc[cur].list.push([index, plays[index]]);

    return acc;
  }, {});

  const sortedGenresHash = Object.values(genresHash).sort((genre1, genre2) => {
    return genre2.total - genre1.total;
  });

  answer = sortedGenresHash.reduce((acc, array) => {
    array.list.sort((play1, play2) => {
      return play2[1] - play1[1];
    });

    acc.push(array.list[0][0]);

    if (array.list.length > 1) {
      acc.push(array.list[1][0]);
    }

    return acc;
  }, []);
  return answer;
}
