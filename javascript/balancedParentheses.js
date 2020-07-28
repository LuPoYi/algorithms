// [()]{}{[()()]()}
// Y
// [(])
// N
function isBalanced(s) {
  let arr = []

  for (let char of s) {
    if (["(", "[", "{"].includes(char)) {
      arr.push(char)
    } else {
      if ((char == ")" && arr[arr.length - 1] == "(") ||
        (char == "]" && arr[arr.length - 1] == "[") ||
        (char == "}" && arr[arr.length - 1] == "{")) {
        arr.pop()
      } else {
        return "NO"
      }
    }
  }

  return (arr.length == 0) ? "YES" : "NO"
}

console.log(isBalanced("{[()]}"))
console.log(isBalanced("{[(])}"))
console.log(isBalanced("()(){{}}[()()]{}{}"))
