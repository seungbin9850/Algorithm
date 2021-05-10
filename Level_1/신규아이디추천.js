function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  let len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

console.log(solution("=.="));

// function solution(new_id) {
//     new_id = new_id.toLowerCase();
//     new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
//     new_id = new_id.replace(/\.+/g, ".");
//     if (new_id[0] === ".") new_id = new_id.slice(1);
//     if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);
//     if (new_id.length === 0) new_id = "a";
//     if (new_id.length >= 16) new_id = new_id.slice(0, 15);
//     if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);
//     if (new_id.length <= 2) {
//       for (; new_id.length < 3; ) new_id += new_id[new_id.length - 1];
//     }
//     return new_id
//   }
