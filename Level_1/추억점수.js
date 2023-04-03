function solution(name, yearning, photo) {
    var answer = [];

    let nameHash = name.reduce((hash, cur, i) => {
        hash[cur] = yearning[i];

        return hash;
    }, {});

    for (const nameList of photo) {
        const sum = nameList.filter((n) => name.includes(n)).reduce((acc, cur) => (acc += nameHash[cur]), 0);

        answer.push(sum);
    }

    return answer;
}

console.log(
    solution(
        ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [
            ["may", "kein", "kain", "radi"],
            ["may", "kein", "brin", "deny"],
            ["kon", "kain", "may", "coni"],
        ]
    )
);
